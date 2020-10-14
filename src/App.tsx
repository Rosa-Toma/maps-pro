import React from "react";

import MapContext from "./context/MapContext";

import useMap from "./hooks/useMap";

import styles from "./App.module.scss";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

export const App = () => {
    const map = useMap();

    return (
        <div className={styles.app}>
            <Header />
            <MapContext.Provider value={map}>
                <Main />
            </MapContext.Provider>
        </div>
    );
}