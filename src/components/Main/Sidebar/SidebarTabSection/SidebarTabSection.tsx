import React from "react";

import styles from "./SidebarTabSection.module.scss";

export const SidebarTabSection = ({ children }: any) => {
    return <div className={styles.sidebarTabSection}>{children}</div>;
};
