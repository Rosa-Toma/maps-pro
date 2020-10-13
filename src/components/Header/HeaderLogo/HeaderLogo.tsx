import * as React from "react";

import styles from "./HeaderLogo.module.scss";

export const HeaderLogo = ({ imgSrc }: any) => {
    return <img className={styles.headerLogo} src={imgSrc} alt={"logo"}></img>;
};
