import React from "react";

import styles from "./SidebarTab.module.scss";

export const SidebarTab = ({ title }: any) => {
    return (
        <button className={styles.sidebarTab}>
            <h1 className={styles.sidebarTab__title}>{title}</h1>
        </button>
    );
};
