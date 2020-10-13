import React, { useEffect } from "react";

import styles from "./Main.module.scss";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";

export const Main = () => {
    return (
        <div className={styles.main}>
            <Sidebar />
            <Toolbar />
            <MapView />
        </div>
    );
};

export const Sidebar = () => {
    return <div className={styles.sidebar}></div>;
};

export const Toolbar = () => {
    return <div className={styles.toolbar}></div>;
};

export const MapView = () => {
    useEffect(() => {
        new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url:
                            "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    }),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });
    }, []);

    return <div id="map" className={styles.mapView}></div>;
};
