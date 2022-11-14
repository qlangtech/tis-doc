import React from 'react';
import clsx from "clsx";

export default function SourceSinkTable() {
    return (
        <table style={{width: '100%', display: 'table'}} border='1'>
            <thead>
            <tr>
                <th rowSpan='2'>类型</th>
                <th colSpan='2'>批量(DataX)</th>
                <th colSpan='2'>实时</th>
            </tr>
            <tr>
                <th width='20%'>读</th>
                <th width='20%'>写</th>
                <th width='20%'>Source</th>
                <th width='20%'>Sink</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className='endtype-name icon-arrow-down'>hdfs</td>
                <td><i className={clsx('tis-check')}  ></i><i
                    className='plugin-link datax-color' ><a target='_blank'
                                                                               href='../plugins/#dataxhdfswriter'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxhdfswriter'>1</a></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxsparkwriter'>2</a></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxhivewriter'>3</a></i>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className='endtype-name'>aliyunOSS</td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxossreader'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxosswriter'>1</a></i>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className='endtype-name'>cassandra</td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxcassandrareader'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxcassandrawriter'>1</a></i>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className='endtype-name'>sqlServer</td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxsqlserverreader'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxsqlserverwriter'>1</a></i>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className='endtype-name'>mysql</td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxmysqlreader'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxmysqlwriter'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechpluginsincrflinkcdcmysqlflinkcdcmysqlsourcefactory'>1</a></i><i
                    className='plugin-link' ><a target='_blank'
                                                                                   href='../plugins/#comqlangtechtispluginsincrflinkconnectorsourcemysqlsourcefactory'>2</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                                   href='../plugins/#comqlangtechtispluginsincrflinkconnectorsinkmysqlsinkfactory'>1</a></i>
                </td>
            </tr>
            <tr>
                <td className='endtype-name'>kafka</td>
                <td></td>
                <td></td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                                       href='../plugins/#comqlangtechasyncmessageclientkafkatikvkafkamqlistenerfactory'>1</a></i>
                </td>
                <td></td>
            </tr>
            <tr>
                <td className='endtype-name'>rocketMq</td>
                <td></td>
                <td></td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                                       href='../plugins/#comqlangtechasyncmessageclientconsumerrocketmqlistenerfactory'>1</a></i>
                </td>
                <td></td>
            </tr>
            <tr>
                <td className='endtype-name'>clickhouse</td>
                <td></td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxclickhousewriter'>1</a></i>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className='endtype-name'>TiDB</td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxtidbreader'>1</a></i>
                </td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className='endtype-name'>pg</td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxpostgresqlreader'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxpostgresqlwriter'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                                   href='../plugins/#comqlangtechpluginsincrflinkchunjunpostgresqlsourcechunjunpostgresqlsourcefactory'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                                   href='../plugins/#comqlangtechpluginsincrflinkchunjunpostgresqlsinkchunjunpostgresqlsinkfactory'>1</a></i>
                </td>
            </tr>
            <tr>
                <td className='endtype-name'>hudi</td>
                <td></td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                                       href='../plugins/#comqlangtechtisplugindataxhudidataxhudiwriter'>1</a></i>
                </td>
                <td></td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                                       href='../plugins/#comqlangtechtispluginsincrflinkconnectorhudihudisinkfactory'>1</a></i>
                </td>
            </tr>
            <tr>
                <td className='endtype-name'>doris</td>
                <td></td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdorisdataxdoriswriter'>1</a></i>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className='endtype-name'>ftp</td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxftpreader'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxftpwriter'>1</a></i>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className='endtype-name'>oracle</td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxoraclereader'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxoraclewriter'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechpluginsincrflinkcdcoracleflinkcdcoraclesourcefactory'>1</a></i>
                </td>
                <td></td>
            </tr>
            <tr>
                <td className='endtype-name'>es</td>
                <td></td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxelasticsearchwriter'>1</a></i>
                </td>
                <td></td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                                       href='../plugins/#comqlangtechtispluginsincrflinkconnectorelasticsearch7elasticsearchsinkfactory'>1</a></i>
                </td>
            </tr>
            <tr>
                <td className='endtype-name'>mongoDB</td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxmongodbreader'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxdataxmongodbwriter'>1</a></i>
                </td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechpluginsincrflinkcdcmongdbflinkcdcmongodbsourcefactory'>1</a></i>
                </td>
                <td></td>
            </tr>
            <tr>
                <td className='endtype-name'>starRocks</td>
                <td></td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                               href='../plugins/#comqlangtechtisplugindataxstarrocksdataxstarrockswriter'>1</a></i>
                </td>
                <td></td>
                <td><i className="fa fa-check fa-3x"  aria-hidden="true"></i><i
                    className='plugin-link' ><a target='_blank'
                                                                                       href='../plugins/#comqlangtechtispluginsincrflinkconnectorstarrocksstarrockssinkfactory2'>1</a></i>
                </td>
            </tr>
            </tbody>
        </table>
    );
}
