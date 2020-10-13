import React from "react";

import styles from "./Header.module.scss";

import logoIread from "../../assets/logo.png";

export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo imgSrc={logoIread} />
            <TabSection>
                <Tab title={"tab"} />
                <Tab title={"tab"} />
                <Tab title={"tab"} />
                <Tab title={"tab"} />
            </TabSection>
        </div>
    );
};

export const Logo = ({ imgSrc }: any) => {
    return <img className={styles.logo} src={imgSrc} alt={"logo"}></img>;
};

export const TabSection = ({ children }: any) => {
    return <div className={styles.tabSection}>{children}</div>;
};

export const Tab = ({ title }: any) => {
    return (
        <button className={styles.tab}>
            <h1 className={styles.tab__title}>{title}</h1>
        </button>
    );
};
