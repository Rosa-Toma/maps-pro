import React from "react";

import styles from "./HeaderTabSection.module.scss";

export const HeaderTabSection = ({ children }: any) => {
    return <div className={styles.headerTabSection}>{children}</div>;
};
