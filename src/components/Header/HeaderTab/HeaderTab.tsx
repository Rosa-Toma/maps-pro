import React from "react";

import styles from "./HeaderTab.module.scss";

export const HeaderTab = ({ title }: any) => {
    return (
        <button className={styles.headerTab}>
            <h1 className={styles.headerTab__title}>{title}</h1>
        </button>
    );
};
