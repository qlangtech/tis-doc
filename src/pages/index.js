import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import QuickInstall from '@site/src/components/QuickInstall';
import Contact from '@site/src/components/Contact';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p><img src={require('/img/logo2.jpg').default} /></p>
        {/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
        {/*<p className="hero__subtitle">{siteConfig.tagline}</p>*/}
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
      title={`${siteConfig.title}`}
      description="Support agile DataOps Based on DataX and Flink-CDC, Chunjun with Web-UI">
      <HomepageHeader />
      <main>
          <HomepageFeatures />

          <QuickInstall />
          <Contact />
      </main>
    </Layout>
  );
}
