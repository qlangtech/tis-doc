import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function CreateArchShell()  {
    return (
        <div>
            <CodeBlock language="shell" showLineNumbers="true">
                mvn com.qlangtech.tis:tis-archetype-generate-plugin::generate \ {'\n'}
                -Drat.skip=true  \ {'\n'}
                -Dtis.version= \ {'\n'}
                -Dtis.extendpoint="com.qlangtech.tis.plugin.incr.TISSinkFactory:DB2SinkFactory;com.qlangtech.tis.async.message.client.consumer.impl.MQListenerFactory:FlinkCDCDB2SourceFactory" \ {'\n'}
                -Dtis.artifactId=tis-flink-db2-plugin
            </CodeBlock>
        </div>
    );
}
