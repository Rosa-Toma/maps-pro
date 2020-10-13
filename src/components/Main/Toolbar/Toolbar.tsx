import React, { useState } from "react";

import styles from "./Toolbar.module.scss";

import { ToolbarSection } from "./ToolbarSection/ToolbarSection";
import { ToolbarTool } from "./ToolbarTool";

// STANDARD
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import Crop32OutlinedIcon from "@material-ui/icons/Crop32Outlined";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import UndoOutlinedIcon from "@material-ui/icons/UndoOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";

// NAVIGATION
import PanToolOutlinedIcon from "@material-ui/icons/PanToolOutlined";
import ZoomInOutlinedIcon from "@material-ui/icons/ZoomInOutlined";
import ZoomOutOutlinedIcon from "@material-ui/icons/ZoomOutOutlined";
import CenterFocusWeakOutlinedIcon from "@material-ui/icons/CenterFocusWeakOutlined";

// OUTILS
import SquareFootOutlinedIcon from "@material-ui/icons/SquareFootOutlined";
import SettingsOverscanOutlinedIcon from "@material-ui/icons/SettingsOverscanOutlined";
import DataUsageOutlinedIcon from "@material-ui/icons/DataUsageOutlined";
import OpenWithOutlinedIcon from "@material-ui/icons/OpenWithOutlined";
import EditAttributesOutlinedIcon from "@material-ui/icons/EditAttributesOutlined";

// ACCROCHE
import NotInterestedOutlinedIcon from "@material-ui/icons/NotInterestedOutlined";
import TouchAppOutlinedIcon from "@material-ui/icons/TouchAppOutlined";
import LinearScaleOutlinedIcon from "@material-ui/icons/LinearScaleOutlined";
import TrendingFlatOutlinedIcon from "@material-ui/icons/TrendingFlatOutlined";

// DESSIN
import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import ChangeHistoryOutlinedIcon from "@material-ui/icons/ChangeHistoryOutlined";
import MultilineChartOutlinedIcon from "@material-ui/icons/MultilineChartOutlined";
import GridOnOutlinedIcon from "@material-ui/icons/GridOnOutlined";
import ViewColumnOutlinedIcon from "@material-ui/icons/ViewColumnOutlined";

// AFFICHAGE
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import StreetviewOutlinedIcon from "@material-ui/icons/StreetviewOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import EditLocationOutlinedIcon from "@material-ui/icons/EditLocationOutlined";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
// import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";

export const Toolbar = ({ mapOpenLayers }: any) => {
    const [iconSelection, setIconSelection] = useState(<NearMeOutlinedIcon />);
    const [iconMesure, setIconMesure] = useState(<SquareFootOutlinedIcon />);
    const [iconInactive, setIconInactive] = useState(
        <NotInterestedOutlinedIcon />
    );
    const [iconDessin, setIconDessin] = useState(
        <FiberManualRecordOutlinedIcon />
    );
    const [iconVue, setIconVue] = useState(<StreetviewOutlinedIcon />);

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

    return (
        <div className={styles.toolbar}>
            <ToolbarSection title={"standard"}>
                <ToolbarTool
                    dropdown
                    title={"sélection"}
                    icon={iconSelection}
                    swapIconSelection={swapIconSelection}
                    toolId={"standard__selection"}
                    mapOpenLayers={mapOpenLayers}
                >
                    <ToolbarTool
                        title={"point et rectangle"}
                        icon={<NearMeOutlinedIcon />}
                        swapIconSelection={swapIconSelection}
                        toolId={"standard__pointEtRectangle"}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"cercle"}
                        icon={<FiberManualRecordOutlinedIcon />}
                        swapIconSelection={swapIconSelection}
                        toolId={"standard__cercle"}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"polygonale"}
                        icon={<Crop32OutlinedIcon />}
                        swapIconSelection={swapIconSelection}
                        toolId={"standard__polygonale"}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"libre"}
                        icon={<BorderColorOutlinedIcon />}
                        swapIconSelection={swapIconSelection}
                        toolId={"standard__libre"}
                        mapOpenLayers={mapOpenLayers}
                    />
                </ToolbarTool>

                <ToolbarTool
                    title={"annuler"}
                    icon={<UndoOutlinedIcon />}
                    toolId={"standard__annuler"}
                    mapOpenLayers={mapOpenLayers}
                />

                <ToolbarTool
                    title={"refaire"}
                    icon={<RedoOutlinedIcon />}
                    toolId={"standard__refaire"}
                    mapOpenLayers={mapOpenLayers}
                />
            </ToolbarSection>

            {/* <SectionDemarcation /> */}

            <ToolbarSection title={"navigation"}>
                <ToolbarTool
                    title={"panoter"}
                    icon={<PanToolOutlinedIcon />}
                    toolId={"navigation__panoter"}
                    mapOpenLayers={mapOpenLayers}
                />
                <ToolbarTool
                    title={"zoomer"}
                    icon={<ZoomInOutlinedIcon />}
                    toolId={"navigation__zoomer"}
                    mapOpenLayers={mapOpenLayers}
                />
                <ToolbarTool
                    title={"dézoomer"}
                    icon={<ZoomOutOutlinedIcon />}
                    toolId={"navigation__dezoomer"}
                    mapOpenLayers={mapOpenLayers}
                />
                <ToolbarTool
                    title={"recentrer"}
                    icon={<CenterFocusWeakOutlinedIcon />}
                    toolId={"navigation__recentrer"}
                    mapOpenLayers={mapOpenLayers}
                />
            </ToolbarSection>

            {/* <SectionDemarcation /> */}

            <ToolbarSection title={"outils"}>
                <ToolbarTool
                    dropdown
                    title={"mesure"}
                    icon={iconMesure}
                    toolId={"outils__mesure"}
                    swapIconMesure={swapIconMesure}
                    mapOpenLayers={mapOpenLayers}
                >
                    <ToolbarTool
                        title={"distance"}
                        icon={<SquareFootOutlinedIcon />}
                        toolId={"outils__distance"}
                        swapIconMesure={swapIconMesure}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"surface"}
                        icon={<SettingsOverscanOutlinedIcon />}
                        toolId={"outils__surface"}
                        swapIconMesure={swapIconMesure}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"buffer"}
                        icon={<DataUsageOutlinedIcon />}
                        toolId={"outils__buffer"}
                        swapIconMesure={swapIconMesure}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"translater"}
                        icon={<OpenWithOutlinedIcon />}
                        toolId={"outils__translater"}
                        swapIconMesure={swapIconMesure}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"modifier"}
                        icon={<EditAttributesOutlinedIcon />}
                        toolId={"outils__modifier"}
                        swapIconMesure={swapIconMesure}
                        mapOpenLayers={mapOpenLayers}
                    />
                </ToolbarTool>
            </ToolbarSection>

            {/* <SectionDemarcation /> */}

            <ToolbarSection title={"accroche"}>
                <ToolbarTool
                    dropdown
                    title={"inactive"}
                    icon={iconInactive}
                    toolId={"accroche__inactive"}
                    swapIconInactive={swapIconInactive}
                    mapOpenLayers={mapOpenLayers}
                >
                    <ToolbarTool
                        title={"inactive"}
                        icon={<NotInterestedOutlinedIcon />}
                        toolId={"accroche__inactive"}
                        swapIconInactive={swapIconInactive}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"point"}
                        icon={<TouchAppOutlinedIcon />}
                        toolId={"accroche__point"}
                        swapIconInactive={swapIconInactive}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"segment"}
                        icon={<LinearScaleOutlinedIcon />}
                        toolId={"accroche__segment"}
                        swapIconInactive={swapIconInactive}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"polyligne"}
                        icon={<TrendingFlatOutlinedIcon />}
                        toolId={"accroche__polyligne"}
                        swapIconInactive={swapIconInactive}
                        mapOpenLayers={mapOpenLayers}
                    />
                </ToolbarTool>
            </ToolbarSection>

            {/* <SectionDemarcation /> */}

            <ToolbarSection title={"dessin"}>
                <ToolbarTool
                    dropdown
                    title={"dessin"}
                    icon={iconDessin}
                    toolId={"dessin__dessin"}
                    swapIconDessin={swapIconDessin}
                    mapOpenLayers={mapOpenLayers}
                >
                    <ToolbarTool
                        title={"cercle"}
                        icon={<FiberManualRecordOutlinedIcon />}
                        toolId={"dessin__cercle"}
                        swapIconDessin={swapIconDessin}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"polyligne"}
                        icon={<TimelineOutlinedIcon />}
                        toolId={"dessin__polyligne"}
                        swapIconDessin={swapIconDessin}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"polygone"}
                        icon={<ChangeHistoryOutlinedIcon />}
                        toolId={"dessin__polygone"}
                        swapIconDessin={swapIconDessin}
                        mapOpenLayers={mapOpenLayers}
                    />
                </ToolbarTool>
                <ToolbarTool
                    dropdown
                    title={"guide"}
                    icon={<GridOnOutlinedIcon />}
                    toolId={"dessin__guide"}
                    mapOpenLayers={mapOpenLayers}
                >
                    <ToolbarTool
                        title={"tangente"}
                        icon={<MultilineChartOutlinedIcon />}
                        toolId={"dessin__tangente"}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"normale"}
                        icon={<ViewColumnOutlinedIcon />}
                        toolId={"dessin__normale"}
                        mapOpenLayers={mapOpenLayers}
                    />
                </ToolbarTool>
            </ToolbarSection>

            {/* <SectionDemarcation /> */}

            <ToolbarSection title={"affichage"}>
                <ToolbarTool
                    title={"état"}
                    icon={<CheckOutlinedIcon />}
                    toolId={"affichage__etat"}
                    mapOpenLayers={mapOpenLayers}
                />
                <ToolbarTool
                    dropdown
                    title={"vue"}
                    icon={iconVue}
                    toolId={"affichage__vue"}
                    swapIconVue={swapIconVue}
                    mapOpenLayers={mapOpenLayers}
                >
                    <ToolbarTool
                        title={"street view"}
                        icon={<StreetviewOutlinedIcon />}
                        toolId={"affichage__streetView"}
                        swapIconVue={swapIconVue}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"bing maps"}
                        icon={<MapOutlinedIcon />}
                        toolId={"affichage__bingMaps"}
                        swapIconVue={swapIconVue}
                        mapOpenLayers={mapOpenLayers}
                    />
                    <ToolbarTool
                        title={"fond geoserver"}
                        icon={<EditLocationOutlinedIcon />}
                        toolId={"affichage__fondGeoserver"}
                        swapIconVue={swapIconVue}
                        mapOpenLayers={mapOpenLayers}
                    />
                </ToolbarTool>
                <ToolbarTool
                    title={"thème"}
                    icon={<WbSunnyOutlinedIcon />}
                    toolId={"affichage__theme"}
                    mapOpenLayers={mapOpenLayers}
                />
            </ToolbarSection>
        </div>
    );
};
