import React, { useContext } from "react";

import MapContext from "../context/MapContext";

import useInteractions from "./useInteractions";

const useHotKeys = () => {
    const { zoomIn, zoomOut } = useInteractions();

    const keyMap = {
        ZOOM: "up",
    };

    const handlers = {
        ZOOM: zoomIn,
    };

    return { keyMap: keyMap, handlers: handlers };
};

export default useHotKeys;
