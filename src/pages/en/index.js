import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function EnglishHome() {
  return (
    <Layout
      title="TIS - No-Code Data Integration Platform | DataX & Flink-CDC Visual Management Tool"
      description="TIS is a no-code data integration platform based on DataX, Flink-CDC and Chunjun, providing visual ETL pipeline building tools for MySQL, PostgreSQL, Oracle, ElasticSearch real-time sync and batch migration.">
      <Head>
        <meta name="keywords" content="TIS, data integration, DataX, Flink CDC, ETL, data sync, no-code, data pipeline, real-time data, batch data, MySQL sync, data migration, big data, DataOps, Chunjun" />
        <meta property="og:locale" content="en_US" />
        <link rel="alternate" hrefLang="zh-CN" href="https://tis.pub/" />
        <link rel="alternate" hrefLang="en" href="https://tis.pub/en/" />
      </Head>
      <main>
        <div className="container margin-vert--lg">
          <h1>TIS - Enterprise No-Code Data Integration Platform</h1>

          <section className="margin-vert--lg">
            <h2>What is TIS?</h2>
            <p>
              TIS (Total Information System) is a no-code data integration platform built on top of industry-leading
              open-source big data components like <strong>DataX</strong>, <strong>Flink-CDC</strong>, and <strong>Chunjun</strong>.
              It provides a comprehensive ETL solution that enables non-technical users to easily accomplish complex data integration tasks.
            </p>
          </section>

          <section className="margin-vert--lg">
            <h2>Key Features</h2>
            <ul>
              <li><strong>Zero-Code Configuration</strong>: Complete all configurations through visual interface</li>
              <li><strong>Real-time Data Synchronization</strong>: Millisecond-level data sync based on Flink-CDC</li>
              <li><strong>Batch Data Processing</strong>: High-performance batch data migration based on DataX</li>
              <li><strong>Multiple Data Sources</strong>: Support for 30+ mainstream databases and big data components</li>
              <li><strong>Plugin Architecture</strong>: Flexible extension with on-demand loading</li>
              <li><strong>Distributed Execution</strong>: Cluster deployment with linear scalability</li>
            </ul>
          </section>

          <section className="margin-vert--lg">
            <h2>Supported Data Sources</h2>
            <div className="row">
              <div className="col col--4">
                <h3>Relational Databases</h3>
                <ul>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>Oracle</li>
                  <li>SQL Server</li>
                  <li>TiDB</li>
                </ul>
              </div>
              <div className="col col--4">
                <h3>NoSQL Databases</h3>
                <ul>
                  <li>MongoDB</li>
                  <li>Cassandra</li>
                  <li>HBase</li>
                  <li>Redis</li>
                </ul>
              </div>
              <div className="col col--4">
                <h3>Analytics Databases</h3>
                <ul>
                  <li>ElasticSearch</li>
                  <li>ClickHouse</li>
                  <li>Doris</li>
                  <li>StarRocks</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="margin-vert--lg">
            <h2>Use Cases</h2>
            <div className="row">
              <div className="col col--6">
                <h3>Real-time Data Synchronization</h3>
                <p>Sync business database changes to data warehouse in real-time for analytics</p>
              </div>
              <div className="col col--6">
                <h3>Batch Data Migration</h3>
                <p>Large-scale data migration and ETL processing between different systems</p>
              </div>
              <div className="col col--6">
                <h3>Data Platform Construction</h3>
                <p>Build enterprise-level data platform with unified data integration</p>
              </div>
              <div className="col col--6">
                <h3>Real-time Data Warehouse</h3>
                <p>Construct real-time data warehouse based on Flink streaming processing</p>
              </div>
            </div>
          </section>

          <section className="margin-vert--lg">
            <h2>Why Choose TIS?</h2>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>TIS</th>
                  <th>DataX</th>
                  <th>Canal</th>
                  <th>FlinkCDC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No-Code Configuration</td>
                  <td>✅</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td>Web Management UI</td>
                  <td>✅</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td>Real-time Sync</td>
                  <td>✅</td>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Batch Sync</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>❌</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td>Plugin Architecture</td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>❌</td>
                  <td>❌</td>
                </tr>
                <tr>
                  <td>Distributed Execution</td>
                  <td>✅</td>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="margin-vert--lg">
            <h2>Quick Start</h2>
            <pre><code>{`# Download TIS
wget https://tis.pub/download/tis-latest.tar.gz

# Extract
tar -zxvf tis-latest.tar.gz

# Start TIS
cd tis && ./bin/tis start

# Access Web UI at http://localhost:8080`}</code></pre>
          </section>

          <section className="margin-vert--lg">
            <h2>Community & Support</h2>
            <ul>
              <li><a href="https://github.com/datavane/tis">GitHub Repository</a></li>
              <li><a href="https://tis.pub/docs">Documentation</a></li>
              <li><a href="https://tis.pub/blog">Technical Blog</a></li>
              <li><a href="https://github.com/datavane/tis/issues">Issue Tracker</a></li>
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}