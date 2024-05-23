import React from 'react';


export default function Processon({children, id,height}) {
 //https://www.processon.com/embed/664d8c2642c52e015bbb9d7f?cid=664d8c2642c52e015bbb9d82
    let processonUrl = "https://www.processon.com/embed/" + id;
    let editUrl = "https://www.processon.com/diagraming/" + id;
    if(!height){
        height = '500px';
    }
    return (
        <div style={{position:'relative'}}>
            <iframe width='100%' height={height} src={processonUrl}></iframe>
            <a style={{position:'absolute',top:'5px',right:'10px',fontSize:'10px'}} target='_blank' href={editUrl}>编辑</a>
        </div>
    );
}




