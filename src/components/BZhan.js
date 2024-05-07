import React from 'react';

export default function BZhan({children, bvid}) {
    let bhref = "//player.bilibili.com/player.html?bvid="+bvid+"&page=1";
    let blink = "https://www.bilibili.com/video/"+ bvid;
    return (
        <div>
        <div> <a target={'_blank'} href={blink} style={{"font-size":"12px"}}>>>建议直接跳转到B站观看,可获得更好的清晰度 </a> </div>
        <iframe width="500" height="400"
                src={bhref}
                scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen="true"></iframe></div>
    );
}
