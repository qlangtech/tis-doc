// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '人人都会用的数据集成产品',
    tagline: '过去，数据集成是开发者用代码搭建的"高墙"。如今TIS用一键式操作打破壁垒——DBA、分析师等技术/业务人员无需编程，通过可视化配置即可完成数据抽取、清洗、同步等全流程。现在整个团队都能像组装乐高一样零代码搭建数据管道！',
    url: 'https://tis.pub',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

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
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
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
        // String format.
        '/libs/jquery/3.5.1/jquery.min.js',
        '/libs/fancybox/3.5.7/jquery.fancybox.min.js',
    ],
    stylesheets: [
        // String format.
        '/libs/fancybox/3.5.7/jquery.fancybox.min.css']
};

module.exports = config;


