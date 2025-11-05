import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import QuickInstall from '@site/src/components/QuickInstall';
import Contact from '@site/src/components/Contact';
import StructuredData from '@site/src/components/SEO/StructuredData';
import SourceSinkTable from '@site/docs/plugin/source-sink-table';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
          <p><img src={require('/img/logo.png').default} /></p>
        {/*<p><img src={require('/img/logo2.jpg').default} /></p>*/}
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            快速开始 ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="TIS - 零代码数据集成平台 | DataX和Flink-CDC可视化管理工具"
      description="TIS是基于DataX、Flink-CDC和Chunjun的零代码数据集成平台，提供可视化的ETL数据管道搭建工具，支持MySQL、PostgreSQL、Oracle、ElasticSearch、Hive等数据库的实时同步和批量迁移。企业级数据中台解决方案，让数据集成变得简单高效。">
      <StructuredData />
      <HomepageHeader />
      <main>
          <HomepageFeatures />

          <section className={styles.sourceSinkSection}>
            <div className="container">
              <h2 className="text--center margin-bottom--xs">支持的数据源</h2>
              <p className="text--center margin-bottom--lg">
                TIS 支持多种数据源的批量和实时数据处理能力
              </p>
              <SourceSinkTable />
            </div>
          </section>

          <QuickInstall />
          <Contact />
      </main>
    </Layout>
  );
}
