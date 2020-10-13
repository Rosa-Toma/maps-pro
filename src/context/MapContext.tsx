import React from "react";
import { Map } from "ol";

const map = new Map({});

const MapContext = React.createContext(map);

export default MapContext;
