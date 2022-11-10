import React from 'react';

export default function Figure({children, img}) {
    let href;
    if (img.default) {
        href = img.default;
    } else {
        href = img;
    }
    return (
        <figure><a data-fancybox href={href}><img src={href}/></a></figure>
    );
}
