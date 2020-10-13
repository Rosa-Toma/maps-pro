import React from "react";

import styles from "./ToolbarSection.module.scss";

export const ToolbarSection = ({ children, title }: any) => {
    return (
        <div className={styles.toolbarSection}>
            <h1>{title}</h1>
            <div className={styles.toolbarSection__tools}>{children}</div>
        </div>
    );
};
