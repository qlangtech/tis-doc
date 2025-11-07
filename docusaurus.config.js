// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '零代码乐高式搭建数据管道',
    tagline: '过去，数据集成是开发者用代码搭建的"高墙"。如今TIS用一键式操作打破壁垒——DBA、分析师等技术/业务人员无需编程，通过可视化配置即可完成数据抽取、清洗、同步等全流程操作。',
    url: 'https://tis.pub',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // 性能优化配置（在customFields中）
    customFields: {
        experimental_faster: true,
    },

    plugins: [
        function(context, options) {
            return {
                name: 'webpack-bundle-optimization',
                configureWebpack(config, isServer) {
                    if (!isServer) {
                        return {
                            optimization: {
                                splitChunks: {
                                    chunks: 'all',
                                    minSize: 20000,
                                    maxSize: 244000,
                                    minChunks: 1,
                                    maxAsyncRequests: 30,
                                    maxInitialRequests: 30,
                                    cacheGroups: {
                                        vendor: {
                                            test: /[\\/]node_modules[\\/]/,
                                            name: 'vendors',
                                            chunks: 'all',
                                            priority: 20,
                                            maxSize: 244000,
                                        },
                                        common: {
                                            name: 'common',
                                            minChunks: 2,
                                            chunks: 'all',
                                            priority: 10,
                                            reuseExistingChunk: true,
                                            maxSize: 244000,
                                        },
                                        docs: {
                                            test: /[\\/]docs[\\/]/,
                                            name: 'docs',
                                            chunks: 'all',
                                            priority: 15,
                                            maxSize: 244000,
                                        },
                                    },
                                },
                            },
                        };
                    }
                },
            };
        },
    ],

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'qlangtech', // Usually your GitHub org/user name.
    projectName: 'tis-doc', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    includeCurrentVersion: false,
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                     "https://github.com/qlangtech/tis-doc/blob/master/"
                    // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                pages: {

                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                googleAnalytics: {
                    trackingID: 'UA-140709779-1',
                    anonymizeIP: true,
                },
                gtag: {
                    trackingID: 'G-S642G38Y0T', // 请替换为您的Google Analytics 4 ID
                    anonymizeIP: true,
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // SEO优化元数据
            metadata: [
                {name: 'keywords', content: 'TIS, 数据集成, DataX, Flink CDC, ETL, 数据同步, 零代码, 数据管道, 实时数据, 批量数据, MySQL同步, 数据迁移, 大数据, DataOps, Chunjun, 数据中台'},
                {name: 'description', content: 'TIS是基于DataX、Flink-CDC和Chunjun的零代码数据集成平台，提供可视化的ETL数据管道搭建工具，支持MySQL、PostgreSQL、Oracle等数据库的实时同步和批量迁移。'},
                {name: 'author', content: 'TIS Team'},
                {property: 'og:title', content: 'TIS - 零代码数据集成平台'},
                {property: 'og:description', content: '基于DataX和Flink-CDC的企业级数据集成解决方案，提供可视化配置界面，支持实时和批量数据同步。'},
                {property: 'og:type', content: 'website'},
                {property: 'og:url', content: 'https://tis.pub'},
                {name: 'twitter:card', content: 'summary_large_image'},
                {name: 'twitter:title', content: 'TIS - 零代码数据集成平台'},
                {name: 'twitter:description', content: '基于DataX和Flink-CDC的企业级数据集成解决方案'}
            ],
            navbar: {
                title: 'TIS',
                logo: {
                    alt: 'Support agile DataOps Based on DataX and Flink-CDC, Chunjun with Web-UI ',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'index',
                        position: 'left',
                        label: '文档',
                    },
                     {to: '/blog', label: '博客', position: 'left'},
                    {to: '/community-collaboration', label: '社区协作', position: 'left'},
                    {
                        href: 'https://github.com/datavane/tis',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        type: 'docsVersionDropdown',
                        position: 'left',
                        dropdownActiveClassDisabled: false,
                    }
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: '文档',
                                to: '/docs/',
                            },
                        ],
                    },
                    // {
                    //     title: 'Community',
                    //     items: [
                    //         {
                    //             label: 'Stack Overflow',
                    //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                    //         },
                    //         {
                    //             label: 'Discord',
                    //             href: 'https://discordapp.com/invite/docusaurus',
                    //         },
                    //         {
                    //             label: 'Twitter',
                    //             href: 'https://twitter.com/docusaurus',
                    //         },
                    //     ],
                    // },
                    // {
                    //     title: 'More',
                    //     items: [
                    //         {
                    //             label: 'Blog',
                    //             to: '/blog',
                    //         },
                    //         {
                    //             label: 'GitHub',
                    //             href: 'https://github.com/facebook/docusaurus',
                    //         },
                    //     ],
                    // },
                ],
                copyright: `Copyright © ${new Date().getFullYear()}  杭州晴朗网络科技有限公司 浙ICP备18035911号-1 https://beian.miit.gov.cn`,
            },
            prism: {
                additionalLanguages: ['java'],
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
    scripts: [
        // 异步加载外部库以提高性能
        {
            src: '/libs/jquery/3.5.1/jquery.min.js',
            async: true,
        },
        {
            src: '/libs/fancybox/3.5.7/jquery.fancybox.min.js',
            async: true,
            defer: true,
        },
    ],
    stylesheets: [
        // String format.
        '/libs/fancybox/3.5.7/jquery.fancybox.min.css']
};

module.exports = config;


