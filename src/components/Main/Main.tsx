import React from "react";

import styles from "./Main.module.scss";

import { MapView } from "./MapView/MapView";
import { Toolbar } from "./Toolbar/Toolbar";
import { Sidebar } from "./Sidebar/Sidebar";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";

let map = new Map({
    layers: [
        new TileLayer({
            source: new XYZ({
                url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            }),
        }),
    ],
    view: new View({
        center: [0, 0],
        zoom: 2,
    }),
});

export const Main = () => {
    return (
        <div className={styles.main}>
            <Sidebar mapOpenLayers={map} />
            <Toolbar mapOpenLayers={map} />
            <MapView mapOpenLayers={map} />
        </div>
    );
};
