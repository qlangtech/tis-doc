---
slug: nest-plugin-reuse
title: 内嵌插件复用
tags: [ plugin]
---

## 前言

在TIS 4.0.0 版本主要的功能是将原先但节点运行的组件扩展到分布式云环境中，以下类图中有三个组件需要依赖到`ServerPortExport`组件，
1. Kubernete Powerjob Server
2. Kubernete Flink Session
3. Kubernete Flink Application

ServerPortExport 组件负责在K8S组件（ReplicaSet）发布过程中将目标端口以不同的方式发布（Ingress，LoadBalance，NodePort）

<iframe width='100%' height='500px' name="embed_dom" frameborder="0"  src="https://www.processon.com/embed/6626299e51b84f0dfc92128c?cid=6626299e51b84f0dfc92128f"></iframe>

[编辑](https://www.processon.com/diagraming/6626299e51b84f0dfc92128c)

## 遇到问题

`ServerPortExport` 组件聚合到不同的组件中，在具体运行过程中需要根据聚合类的不同有不同的初始值，

例如，聚合在K8SDataXPowerJobServer类中初始值为`7700`，而当聚合在`BasicFlinkK8SClusterCfg`中的初始值为`8081`，当然，直观来说，最简单的办法是根据聚合到不同的类，创建不同的`ServerPortExport`的子类从而来设置不同的初始值，
但这会创建出大量的冗余代码，所以，并不可取。

## 解决办法

在运行期，根据所在聚合类的Descriptor来动态设置 `ServerPortExport.serverPort` 属性的值

<iframe width='100%' height='500px'  frameborder="0"  src="https://www.processon.com/embed/662637256b32731aec0d8fe0?cid=662637256b32731aec0d8fe3"></iframe>

[编辑](https://www.processon.com/diagraming/662637256b32731aec0d8fe0)

具体需要做以下功能：
1. 创建 DefaultExportPortProvider接口，get方法返回对应的端口默认值
2. `BasicFlinkK8SClusterCfg`和`K8SDataXPowerJobServer`对应的 Descriptor分别实现以上接口
3. 在运行期将Descriptor序列化成Json步骤中，需要将Descriptor实例与当前运行的线程绑定，这部分功能在Json序列化过程中执行，为此需要添加新类`DescriptorsJSONResult`
4. 为类`DescriptorsJSONResult`注册到Json序列化注册器中
    ``` java title="JsonUtil.java"
       ObjectWriter descSerializer = new ObjectWriter() {
            @Override
            public void write(JSONWriter jsonWriter, Object object, Object fieldName, Type fieldType, long features) {
                DescriptorsJSONResult value = (DescriptorsJSONResult) object;
                Objects.requireNonNull(value, "callable of " + fieldName + " can not be null");
                jsonWriter.writeRaw(value.toJSONString());
            }
        };
        com.alibaba.fastjson2.JSON.register(DescriptorsJSONResult.class, descSerializer);
    ```
5. 通过`ServerPortExport.json`配置描述文件，设置属性serverPort的默认值
      ```json title="ServerPortExport.json"
        {
         "serverPort": {
            "help": "SpringBoot配置，HTTP端口号，默认7700，不建议更改",
            "dftVal": "com.qlangtech.tis.plugin.datax.powerjob.ServerPortExport.dftExportPort():uncache_true"
          }
        }
      ```
      ``` java title="ServerPortExport.java"
        public static Integer dftExportPort() {
          return ((DefaultExportPortProvider) 
             DescriptorsJSONResult.getRootDescInstance()).get();
        }
      ```

## 总结      
   通过以上步骤，就可以将`ServerPortExport`根据所在聚合类不同将属性`serverPort`初始化成不同的默认值。
   以此作为一个例子，可以在TIS中相同需求可以推而广之。
