import React from "react";
import { Map } from "ol";

const MapContext = React.createContext(new Map({}));

export default MapContext;
