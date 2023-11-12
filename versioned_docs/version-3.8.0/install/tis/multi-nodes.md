---
title: 多节点安装
linktitle: 多节点安装
date: 2014-03-10
type: book
sidebar_position: 5
---

import Link from '/src/components/Link';


## 介绍

 由于TIS在分布式环境中有多个组件(Console、Assemble)需要安装。为了简化安装过程，使用了Ansible进行组件安装，执行Ansible脚本前，先初始化配置文件，最后一键触发Ansible Playbook就能快速完成安装过程。



## 环境准备
### Ansible安装

Ansible提供了强大的集配置,部署,自动化于一身的playbook [http://www.ansible.com.cn](http://www.ansible.com.cn)
linux服务器可以使用以下命令来进行安装:

```shell
 yum install ansible
```
当前测试用的服务器上使用的版本为 **2.9.6**
### TIS Ansible安装脚本获取

Ansible脚本存放在github仓库中 [https://github.com/qlangtech/tis-ansible](https://github.com/qlangtech/tis-ansible)，将脚本clone到本地。

### 服务器节点清单

本方案已经在**Centos7.8**服务期中测试通过，需要准备以下服务器节点：

| 节点Key           |      功能          |  数量  |建议配置 |是否必须|
|----------         |:-------------     |------: |------:|:------:|
|tis-console        | TIS中央控制台       | 1     | 2核4G | 是 |
|assemble           | 全量流程控制及中央日志收集   |   1 |  2核4G |是|
|MySQL Server v5.7      | 保存TIS配置信息 | 1|2核4G |是|


### Ansible堡垒节点与服务节点免密码登录

 ansible在安装节点执行playbook，会通过ssh连接到远端目标机器上执行安装命令，需要将安装节点上的私钥-公钥对的公钥先放置到远端服务器 **.ssh/authorized_keys** 文件中，执行：
 ``` shell script
 cd tis-ansible
 ansible all -m ping -i ./inventory/hosts
 ```
 结果如下:
 ``` shell
 10.1.1.1 | SUCCESS => {
    "changed": false, 
    "ping": "pong"
}
10.1.1.2 | SUCCESS => {
    "changed": false, 
    "ping": "pong"
}
10.1.1.3 | SUCCESS => {
    "changed": false, 
    "ping": "pong"
}
10.1.1.4 | SUCCESS => {
    "changed": false, 
    "ping": "pong"
}
10.1.1.5 | SUCCESS => {
    "changed": false, 
    "ping": "pong"
}
 ```
 显示全部节点能够联通，可进入下一步。

## 安装步骤

### 安装Mysql数据库
:::tip
如果集群中已经安装MySQL则跳过这一步
:::

 1. 选择一台Mysql数据库服务器
 2. 下载mysql rpm包到本地
    
    ```  shell
      wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
    ```
 3. 将rpm安装到 yum的仓库列表中,执行：
  
     ```  shell
      yum localinstall -y mysql57-community-release-el7-10.noarch.rpm         
     ```
    
 4. 确认是否已经添加到yum列表中
          
    ``` shell
    yum search mysql-community-server    
    ```
    如看到有以下这一行就算成功了
    ``` shell
    mysql-community-server.x86_64 : A very fast and reliable SQL database server
    ```
 
 5. 执行安装mysql
    
    ``` shell
    yum install -y mysql-community-server  
    ```
 
 6. 安装完成之后需要对mysql进行配置，可以远端通过用户名密码登录
    
    1. vim /etc/my.cnf，在[mysqld]下添加skip-grant-tables 属性,然后重启
    2. 启动mysql，执行：service mysqld start
    3. 通过`mysql`命令登录数据库，执行：
    
       ``` sql
       update mysql.user set host='%' where user="root";
       flush privileges;
       ALTER USER 'root'@'%' IDENTIFIED BY '123456';
       ```
    

### 初始化配置文件

#### 服务器节点配置

   编辑tis-ansible目录下 [inventory/hosts](https://github.com/qlangtech/tis-ansible/blob/master/inventory/hosts)文件，
   将准备好的服务器节点配置到hosts文件中

:::caution
  测试环境中，以上所有角色可以用相同的IP地址，将所有角色安装在同一节点，以便达到节约资源的目的。生产环境请尽量每个角色安装在不同节点，以便保证系统可靠性。
:::
    
   文件内容格式如下：   
   ```
      [tis-console]
      10.1.1.1
            
      [assemble]
      10.1.1.2
            
      [buildtask-overseer]
      10.1.1.3
            
      [buildtask-worker]
      10.1.1.4    
   ```
   需要配置serverGroup为：[tis-console]、[assemble]、[hadoop-yarn-resource-manager]
      
#### 系统配置参数配置 

配置文件[vars.yml](https://github.com/qlangtech/tis-ansible/blob/master/vars.yml)   
    
1. 其他
    
   |  Key                            |      说明             |  例子  | 必须|
   |----------                       |:-------------         |:------|:------:|
   |git_src                          | tis github地址，`当使用release包安装时可以不配置`       | https://github.com/qlangtech/tis.git     | N|
   |git_branch                       | tis github 分支，`当使用release包安装时可以不配置`   |   master | N|
   |task_worker_memory               | 任务中心JVM启动分配的堆内存大小 | 400m       | Y |
   |tis_online_repository            | 线上TIS仓库地址           |http://myhost |N|
                
2. 数据库
    
   |  Key                            |      说明             |  例子  | 必须|
   |----------                       |:-------------   |:------|:------:|
   |tisconsole_db_url                |tisMysql数据库url     |127.0.0.1 |Y|
   |tisconsole_db_username           |tisMysql数据库用户名    |root |Y|
   |tisconsole_db_password           |tisMysql数据库密码       |root |Y|
   |tisconsole_db_dbname             |tisMysql数据库dbname  |tis_console |Y|

#### tis_console 数据库初始化

```shell script
cd tis-ansible

mysql -hdbip -uroot -ppassword < ./tis_console_mysql.sql
```

### 开始安装
 
 安装模式分为两种: <Link href={require('./multi-nodes.md')} anchor='基于Release包安装' ></Link>  
 <Link href={require('./multi-nodes.md')} anchor='基于源码安装'>基于源码安装</Link>

#### 基于Release包安装
  
Release包（已经deploy到aliyun OSS仓库中）直接在目标服务器上部署安装
    
  对应的脚本为: ./tis-ansible/deploy-tis-by-release.yml
    
Ansible脚本为: [deploy-tis-by-release.yml](https://github.com/qlangtech/tis-ansible/blob/master/deploy-tis-by-release.yml)

安装TIS
```shell
cd tis-ansible
ansible-playbook ./deploy-tis-by-release.yml --tags=initos,tjs,assemble -i ./inventory/hosts
```

 > `注意`：如果在本地环境中zookeeper、hadoop或者spark已经安装，则**tags**标签中zk,hadoop,spark可以去掉

:::tip
 初始用户建议使用***基于Release包安装***
:::
 
#### 基于源码安装 
  
另外一种是通过Github源代码 [https://github.com/qlangtech/tis-solr](https://github.com/qlangtech/tis-solr)到本地执行编译打包之后自动部署到目标服务器上。
     
对应脚本为: [./tis-ansible/deploy-tis-by-compile.yml](https://github.com/qlangtech/tis-ansible/blob/master/deploy-tis-by-compile.yml)
     
```shell script
 cd tis-ansible    
 ansible-playbook ./deploy-tis-by-compile.yml --tags pkg,pkg-plugin,ng-tis,tjs,assemble  -i ./inventory/hosts
```

 安装过程需要一点时间，请耐心等待。当顺利执行完成之后就可以进入下一步了




