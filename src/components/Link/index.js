import React from 'react';
import Link from '@docusaurus/Link';
import styles from './css.css';
import clsx from "clsx";

export default function TisLink({children, href, anchor}) {
    if(!href.metadata){
        return <></>
    }
    let to = href.metadata.permalink;
    if (anchor) {
        to += ('#' + anchor);
    }
    return (
        <Link className={clsx(" button--link tis-link")} to={to}>{children}</Link>
    );
}
