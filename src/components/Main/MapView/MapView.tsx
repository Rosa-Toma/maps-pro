import React, { useEffect, useContext } from "react";
import MapContext from "../../../context/MapContext";

import styles from "./MapView.module.scss";

export const MapView = () => {
    const map = useContext(MapContext);
    useEffect(() => {
        map.setTarget("map");
    }, [map]);

    return <div id="map" className={styles.mapView}></div>;
};
