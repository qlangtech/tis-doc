import React from 'react';
import clsx from 'clsx';
import styles from './css.css';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import Figure from '/src/components/Figure';

export default function Contact() {
    return (
        <div className="container contact">
            <div className="row">
                <div className={clsx('col col--4 text--center')}>
                    <h2>联系我们</h2>
                </div>
                <div className={clsx('col col--4 text--center')}>
                    <h3>微信TIS小秘书</h3>
                    <div style={{color:'#666666'}}>添加后会邀请您进入微信群参与讨论</div>
                    <div>
                        <img src={require('/img/weixin.jpeg').default}     width="250"/></div>
                </div>
                <div className={clsx('col col--4 text--center')}>
                    <h3>微信公众号</h3>
                    <div style={{color:'#666666'}}>定期发布最新TIS功能特性博客</div>
                    <div><img src={require('/img/weixin_talk_group.jpg').default} width="250"/></div>
                </div>
            </div>
        </div>
    );
}
