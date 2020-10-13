import React from "react";

import { HeaderTabSection } from "./HeaderTabSection/HeaderTabSection";
import { HeaderTab } from "./HeaderTab/HeaderTab";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";

import styles from "./Header.module.scss";

import logoIread from "../../assets/logo.png";

export const Header = () => {
    return (
        <div className={styles.header}>
            <HeaderLogo imgSrc={logoIread} />
            <HeaderTabSection>
                <HeaderTab title={"tab"} />
                <HeaderTab title={"tab"} />
                <HeaderTab title={"tab"} />
                <HeaderTab title={"tab"} />
            </HeaderTabSection>
        </div>
    );
};
