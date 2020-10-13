import React from "react";

import styles from "./Main.module.scss";

import { MapView } from "./MapView/MapView";
import { Toolbar } from "./Toolbar/Toolbar";
import { Sidebar } from "./Sidebar/Sidebar";

export const Main = () => {
    return (
        <div className={styles.main}>
            <Sidebar />
            <Toolbar />
            <MapView />
        </div>
    );
};
