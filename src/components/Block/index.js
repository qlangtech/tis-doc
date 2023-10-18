
import React from 'react';

import styles from './css.css';
import clsx from "clsx";

export default function Block({children}) {

    return (
        <div className={clsx("max-block-height")}>{children}</div>
    );
}
