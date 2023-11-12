---
title: 分表规则实现
date: 2020-07-26
type: book
weight : 10
---

import Figure from '/src/components/Figure';
import Link from '/src/components/Link';

## 介绍

虽然目前基于分布式海量OLTP数据库，例如[TiDB](https://cn.pingcap.com/)，[OceanBase](https://www.oceanbase.com/)大行其道，
但，在企业应用领域，采用MySQL分库分表存放海量依然是非常流行的。

当用户需要将采用了分表策略（例如：订单表`order`,在数据库中会将记录按照一定规则存放于`order_01`,`order_02`,`order_03`,....`order_n`中）的数据表作为数据源导入到下游表，例如，Doris、StarRocks、ElasticSearch，需要将多个物理分表作为独立的逻辑表进行
数据同步操作。

针对以上需求，TIS在`3.7.1版本`数据源定义中引入了一个新的配置项，开启物理分表的识别功能。经过需求掉要目前分表策略基本上只会应用MySQL上，其他数据库，例如：
SQLServer，Oracle目前还**没有发现**有分表需求。

:::caution
所以，目前分表识别功能先只在MySQL数据源上可以使用，将来其他类型数据源需要使用分表策略，可以做简单配置让分表策略生效
:::

## 使用说明

开启分表策略很简单，以MySQL数据源定义为例。按照以下步骤：

### 创建MySQL数据源

   在`分表策略`选项，选择`on`

<Figure img={require('./create_mysql_datasource.png')}/>

### 配置分表正则识别规则

  默认的正则规则会匹配`tabname_\d+` 这样的分表，一般情况下不需要设置该配置项目，如用户业务系统中有特殊的分表规则，如果分表的后缀是带字母，例如：`order_00`,`order_0a`,`order_ff`,则需要额外配置`分表识别`配置项

<Figure img={require('./recognize_split_table_config.png')}/>

### 验证效果

 当`分表识别策略`由 `off` 切换到 `on` 之后，在DataXReader选表步骤，会将原先数据库表中的物理分表，识别成统一的逻辑表
   
   | 未开启分表识别                                                       |开启分表识别|
   |---------------------------------------------------------------|---|
   | <Figure img={require('./reader_table_split_table_off.png')}/> |<Figure img={require('./reader_table_split_table_on.png')}/>|

 

:::tip
后续执行**批量同步**与**增量实时同步** 都会按照分表识别配置逻辑来执行，用户毋需关注
:::



