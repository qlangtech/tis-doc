import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '开箱即用',
    Svg: require('@site/static/img/kxjy.png').default,
      subtitle:(
          <>Cloud-Native时代的ETL实时数仓标配
          </>
      ),
    description: (
      <>
          针对企业级ETL实时数仓应用场景，TIS基于业界优秀的开源大数据组件，构建了一层强大的领域抽象层，对ETL各环节执行流程进行抽象，对用户屏蔽了大数据组件底层的复杂性。通过使用TIS将大数据业务分析师与底层数据开发人员完美解耦。
      </>
    ),
  },
  {
    title: '强大的扩展性',
      subtitle:(
          <>敏捷玩转大数据
          </>
      ),
    Svg: require('@site/static/img/kzx.png').default,
    description: (
      <>
          TIS参照Jenkins优秀的微内核架构设计，完美践行开闭原则（OCP）,在内核层定义了丰富多样的扩展点，使开发者用户能够轻松扩展TIS（已经接入了Chunjun、DataX，Flink，Flink-CDC），从而满足频繁多变的业务需求
      </>
    ),
  },
  {
    title: '极致的安装体验',
      subtitle:(
          <>能想到TIS安装有多方便吗？
          </>
      ),
      Svg: require('@site/static/img/azty.png').default,
    description: (
      <>
          只需要下载一个很小的内核包，解压、启动。从插件池中选择你需要的插件，热部署生效（实现按需加载，避免过多组件冗余在一个系统中，导致臃肿、运行缓慢、浪费系统资源）就能构建你的数仓应用
      </>
    ),
  },
   {
       title: '丰富的数据端类型支持',
       subtitle:(
           <>TIS中可支持多少种数据端类型？
           </>
       ),
        Svg: require('@site/static/img/sjlxzc.png').default,
        description: (
            <>
                TIS中已经支持<code>MySql</code>,<code>PostgreSQL</code>,<code>Oracle</code>,<code>ElasticSearch</code>,<code>MongoDB</code>, <code>StarRocks</code>,<code>Doris</code>,<code>Clickhouse</code>,<code>Hudi</code>,<code>Cassandra</code>,<code>SqlServer</code>,<code>TiDB</code>数据类型的Source和Sink组件，通过整合业内最优秀大数据组件实现。用户也可以通过TIS提供的自动化插件脚手架非常方便地构建新的数据端类型
            </>
        ),
   }
];

function Feature({Svg, title, subtitle ,description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={Svg} />
      </div>
      <div className="text--center padding-horiz--md tis-feature">
        <h4>{title}</h4>
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
