
import React from 'react';

import styles from './css.css';
import clsx from "clsx";

export default function PluginFields({children}) {

    return (
        <div className={clsx("custom-list")}>{children}</div>
    );
}
