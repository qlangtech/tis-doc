import React from 'react';
import clsx from 'clsx';
import styles from './css.css';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';

export default function HomepageFeatures() {
    return (
        <div className="container quick-install">
            <div className="row">
                <div className={clsx('col col--6 install-desc')}>
                    <h2>三条命令快速安装，免本地源码构建.</h2>
                    <h3>TIS 可运行于 macOS, Linux, FreeBSD系统之上.</h3>
                </div>
                <div className={clsx('col col--6')}>
                    下载
                    <CodeBlock language="shell">
                        $ wget http://mirror.qlangtech.com/$version/tis/tis-uber.tar.gz
                    </CodeBlock>

                    解压
                    <CodeBlock language="shell">
                        $ tar xvf tis-uber.tar.gz -C ./
                    </CodeBlock>
                    启动
                    <CodeBlock language="shell">
                        $ ./bin/tis start
                    </CodeBlock>
                    <Link
                        to="/docs/install/tis/uber">
                        查看详细
                    </Link>
                </div>
            </div>
        </div>
    );
}
