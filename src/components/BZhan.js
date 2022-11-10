import React from 'react';

export default function BZhan({children, bvid}) {
    let bhref = "//player.bilibili.com/player.html?bvid="+bvid+"&page=1";
    return (
        <div>
        <div>建议直接跳转到B站观看</div>
        <iframe width="500" height="400"
                src={bhref}
                scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen="true"></iframe></div>
    );
}
