import React from 'react';
import clsx from "clsx";
import Link from '@docusaurus/Link';

export default function SourceSinkTable() {
    // 由于 includeCurrentVersion: false，无法直接引用 docs/plugin/plugins.mdx
    // 使用版本化文档的路径
    const pluginsPagePath = '/docs/plugin/plugins';

    return ( <div>


<p><strong>Provider:</strong> <i className='plugin-link flink-cdc-color'><a target='_blank' href='https://ververica.github.io/flink-cdc-connectors'>FlinkCDC</a></i><i className='plugin-link chunjun-color'><a target='_blank' href='https://dtstack.github.io/chunjun'>Chunjun</a></i><i className='plugin-link tis-color'><a target='_blank' href='https://github.com/qlangtech/tis'>TIS</a></i><i className='plugin-link datax-color'><a target='_blank' href='https://github.com/alibaba/DataX'>DataX</a></i></p>

<table style={{width: '100%', display: 'table'}}  border='1'>
<thead><tr><th rowspan='2'>类型</th><th colspan='2'>批量(DataX)</th><th colspan='2'>实时</th></tr>
<tr><th width='20%'>读</th><th width='20%'>写</th><th width='20%'>Source</th><th width='20%'>Sink</th></tr>
</thead><tbody>
<tr>
<td class='endtype-name'>Clickhouse</td><td></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxclickhousewriter'}>1</Link></i></td><td></td><td><i className={clsx('tis-check')}></i><i className='plugin-link chunjun-color'><Link to={pluginsPagePath+'#comqlangtechpluginsincrflinkchunjunclickhousesinkchunjunclickhousesinkfactory'}>1</Link></i></td></tr>
<tr>
<td class='endtype-name'>ElasticSearch</td><td></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxelasticsearchwriter'}>1</Link></i></td><td></td><td><i className={clsx('tis-check')}></i><i className='plugin-link tis-color'><Link to={pluginsPagePath+'#comqlangtechtispluginsincrflinkconnectorelasticsearch7elasticsearchsinkfactory'}>1</Link></i></td></tr>
<tr>
<td class='endtype-name'>Doris</td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindorisdataxdorisreader'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdorisdataxdoriswriter'}>1</Link></i></td><td></td><td><i className={clsx('tis-check')}></i><i className='plugin-link chunjun-color'><Link to={pluginsPagePath+'#comqlangtechpluginsincrflinkchunjundorissinkchunjundorissinkfactory'}>1</Link></i></td></tr>
<tr>
<td class='endtype-name'>Paimon</td><td></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtispluginpaimondataxdataxpaimonwriter'}>1</Link></i></td><td></td><td><i className={clsx('tis-check')}></i><i className='plugin-link flink-cdc-color'><Link to={pluginsPagePath+'#comqlangtechtispluginsincrflinkpipelinepaimonsinkpaimonpipelinesinkfactory'}>1</Link></i></td></tr>
<tr>
<td class='endtype-name'>AliyunODPS</td><td></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxodpswriter'}>1</Link></i></td><td></td><td></td></tr>
<tr>
<td class='endtype-name'>MySQL</td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxmysqlreader'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxmysqlwriter'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link flink-cdc-color'><Link to={pluginsPagePath+'#comqlangtechtispluginsincrflinkcdcmysqlflinkcdcmysqlsourcefactory'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link chunjun-color'><Link to={pluginsPagePath+'#comqlangtechtispluginsincrflinkconnectorsinkmysqlsinkfactory'}>1</Link></i></td></tr>
<tr>
<td class='endtype-name'>Oracle</td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxoraclereader'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxoraclewriter'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link flink-cdc-color'><Link to={pluginsPagePath+'#comqlangtechpluginsincrflinkcdcoracleflinkcdcoraclesourcefactory'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link chunjun-color'><Link to={pluginsPagePath+'#comqlangtechpluginsincrflinkchunjunoraclesinkchunjunoraclesinkfactory'}>1</Link></i></td></tr>
<tr>
<td class='endtype-name'>SqlServer</td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxsqlserverreader'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxsqlserverwriter'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link flink-cdc-color'><Link to={pluginsPagePath+'#comqlangtechtispluginsincrflinkcdcsqlserverflinkcdcsqlserversourcefactory'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link chunjun-color'><Link to={pluginsPagePath+'#comqlangtechtispluginsincrflinkconnectorsinksqlserversinkfactory'}>1</Link></i></td></tr>
<tr>
<td class='endtype-name'>KingBase</td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxkingbasedataxkingbasereader'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxkingbasedataxkingbasewriter'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link tis-color'><Link to={pluginsPagePath+'#comqlangtechpluginsincrflinkcdckingbaseflinkcdckingbasesourcefactory'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link chunjun-color'><Link to={pluginsPagePath+'#comqlangtechtispluginsincrflinkconnectorkingbasesinkkingbasesinkfactory'}>1</Link></i></td></tr>
<tr>
<td class='endtype-name'>Kafka</td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxkafkareaderdataxkafkareader'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtispluginsdataxkafkawriterdataxkafkawriter'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link tis-color'><Link to={pluginsPagePath+'#comqlangtechtispluginkafkaconsumerkafkamqlistenerfactory'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link chunjun-color'><Link to={pluginsPagePath+'#comqlangtechtispluginsincrflinkchunjunkafkasinkchujunkafkasinkfactory'}>1</Link></i></td></tr>
<tr>
<td class='endtype-name'>Postgres</td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxpostgresqlreader'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxpostgresqlwriter'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link flink-cdc-color'><Link to={pluginsPagePath+'#comqlangtechpluginsincrflinkcdcpostgresqlflinkcdcpostresqlsourcefactory'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link chunjun-color'><Link to={pluginsPagePath+'#comqlangtechpluginsincrflinkchunjunpostgresqlsinkchunjunpostgresqlsinkfactory'}>1</Link></i></td></tr>
<tr>
<td class='endtype-name'>MariaDB</td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxmariareader'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxmariawriter'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link flink-cdc-color'><Link to={pluginsPagePath+'#comqlangtechtispluginsincrflinkcdcmariaflinkcdcmariadbsourcefactory'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link chunjun-color'><Link to={pluginsPagePath+'#comqlangtechtispluginsincrflinkmariasinkmariadbsinkfactory'}>1</Link></i></td></tr>
<tr>
<td class='endtype-name'>HiveMetaStore</td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtishivereaderdataxhivereader'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxhivewriter'}>1</Link></i></td><td></td><td></td></tr>
<tr>
<td class='endtype-name'>StarRocks</td><td></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxstarrocksdataxstarrockswriter'}>1</Link></i></td><td></td><td><i className={clsx('tis-check')}></i><i className='plugin-link chunjun-color'><Link to={pluginsPagePath+'#comqlangtechtispluginsincrflinkchunjunstarrockssinkchunjunstarrockssinkfactory'}>1</Link></i></td></tr>
<tr>
<td class='endtype-name'>MongoDB</td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxmongodbreader'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxmongodbwriter'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link flink-cdc-color'><Link to={pluginsPagePath+'#comqlangtechpluginsincrflinkcdcmongdbflinkcdcmongodbsourcefactory'}>1</Link></i></td><td></td></tr>
<tr>
<td class='endtype-name'>Spark</td><td></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxsparkwriter'}>1</Link></i></td><td></td><td></td></tr>
<tr>
<td class='endtype-name'>DaMeng</td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdamengreaderdataxdamengreader'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdamengwriterdataxdamengwriter'}>1</Link></i></td><td></td><td><i className={clsx('tis-check')}></i><i className='plugin-link chunjun-color'><Link to={pluginsPagePath+'#comqlangtechpluginsincrflinkchunjundamengsinkchunjundamengsinkfactory'}>1</Link></i></td></tr>
<tr>
<td class='endtype-name'>TDFS</td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxdfsreader'}>1</Link></i></td><td><i className={clsx('tis-check')}></i><i className='plugin-link datax-color'><Link to={pluginsPagePath+'#comqlangtechtisplugindataxdataxdfswriter'}>1</Link></i></td><td></td><td></td></tr>
</tbody>
</table>

   </div> );
}