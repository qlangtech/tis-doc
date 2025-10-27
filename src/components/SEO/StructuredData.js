import React from 'react';
import Head from '@docusaurus/Head';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TIS",
    "applicationCategory": "DataApplication",
    "operatingSystem": "Linux, macOS, Windows",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CNY"
    },
    "description": "TIS是基于DataX、Flink-CDC和Chunjun的零代码数据集成平台，提供可视化的ETL数据管道搭建工具",
    "url": "https://tis.pub",
    "author": {
      "@type": "Organization",
      "name": "TIS Team",
      "url": "https://tis.pub"
    },
    "publisher": {
      "@type": "Organization",
      "name": "杭州晴朗网络科技有限公司"
    },
    "softwareVersion": "4.3.0",
    "keywords": "数据集成,ETL,DataX,Flink-CDC,数据同步,数据管道,零代码",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "256"
    },
    "features": [
      "零代码配置",
      "可视化界面",
      "实时数据同步",
      "批量数据处理",
      "多数据源支持",
      "插件化架构",
      "分布式执行"
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TIS数据集成平台",
    "url": "https://tis.pub",
    "logo": "https://tis.pub/img/logo.png",
    "sameAs": [
      "https://github.com/datavane/tis"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "技术支持",
      "email": "support@tis.pub",
      "availableLanguage": ["Chinese", "English"]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": "https://tis.pub"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "文档",
        "item": "https://tis.pub/docs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "博客",
        "item": "https://tis.pub/blog"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "TIS是什么？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TIS是一个基于DataX、Flink-CDC和Chunjun的零代码数据集成平台，提供可视化的ETL数据管道搭建工具，让非技术人员也能轻松完成数据集成任务。"
        }
      },
      {
        "@type": "Question",
        "name": "TIS支持哪些数据库？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TIS支持MySQL、PostgreSQL、Oracle、ElasticSearch、MongoDB、StarRocks、Doris、Clickhouse、Hudi、Cassandra、SqlServer、TiDB等主流数据库。"
        }
      },
      {
        "@type": "Question",
        "name": "TIS如何安装部署？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TIS提供极简的安装体验，只需下载内核包，解压并启动，然后从插件池选择所需插件即可完成部署。"
        }
      },
      {
        "@type": "Question",
        "name": "TIS是开源的吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "是的，TIS是完全开源的项目，代码托管在GitHub上，采用Apache License 2.0协议。"
        }
      }
    ]
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqData)}
      </script>
    </Head>
  );
}