import React, { useEffect } from "react";

import styles from "./MapView.module.scss";

export const MapView = ({ mapOpenLayers }: any) => {
    useEffect(() => {
        mapOpenLayers.setTarget("map");
    }, [mapOpenLayers]);

    return <div id="map" className={styles.mapView}></div>;
};
