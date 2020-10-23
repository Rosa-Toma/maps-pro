import React, { useState } from "react";

import {
    NearMeOutlined,
    SquareFootOutlined,
    NotInterestedOutlined,
    FiberManualRecordOutlined,
    StreetviewOutlined,
} from "@material-ui/icons";

export const useSwapIcon = () => {
    const [iconSelection, setIconSelection] = useState(<NearMeOutlined />);
    const [iconMesure, setIconMesure] = useState(<SquareFootOutlined />);
    const [iconInactive, setIconInactive] = useState(<NotInterestedOutlined />);
    const [iconDessin, setIconDessin] = useState(<FiberManualRecordOutlined />);
    const [iconVue, setIconVue] = useState(<StreetviewOutlined />);

    const swapIconSelection = (newIcon: any) => {
        setIconSelection(newIcon);
    };

    const swapIconMesure = (newIcon: any) => {
        setIconMesure(newIcon);
    };
    const swapIconInactive = (newIcon: any) => {
        setIconInactive(newIcon);
    };
    const swapIconDessin = (newIcon: any) => {
        setIconDessin(newIcon);
    };

    const swapIconVue = (newIcon: any) => {
        setIconVue(newIcon);
    };
    return {
        iconSelection: iconSelection,
        iconMesure: iconMesure,
        iconInactive: iconInactive,
        iconDessin: iconDessin,
        iconVue: iconVue,
        swapIconSelection: swapIconSelection,
        swapIconMesure: swapIconMesure,
        swapIconInactive: swapIconInactive,
        swapIconDessin: swapIconDessin,
        swapIconVue: swapIconVue,
    };
};

export default useSwapIcon;
