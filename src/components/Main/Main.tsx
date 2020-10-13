import React, { useEffect, useState } from "react";

import styles from "./Main.module.scss";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

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

const zoomIn = (map: any) => {
    const view = map.getView();
    const zoom = view.getZoom();

    if (zoom < view.getMaxZoom()) {
        view.setZoom(zoom + 1);
    }
};

const zoomOut = (map: any) => {
    const view = map.getView();
    const zoom = view.getZoom();

    if (zoom < view.getMaxZoom()) {
        view.setZoom(zoom - 1);
    }
};

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

    const zoomIn = (map: any) => {
        const view = map.getView();
        const zoom = view.getZoom();

        if (zoom < view.getMaxZoom()) {
            view.setZoom(zoom + 1);
        }
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
                >
                    <ToolbarTool
                        title={"point et rectangle"}
                        icon={<NearMeOutlinedIcon />}
                        swapIconSelection={swapIconSelection}
                        toolId={"standard__pointEtRectangle"}
                    />
                    <ToolbarTool
                        title={"cercle"}
                        icon={<FiberManualRecordOutlinedIcon />}
                        swapIconSelection={swapIconSelection}
                        toolId={"standard__cercle"}
                    />
                    <ToolbarTool
                        title={"polygonale"}
                        icon={<Crop32OutlinedIcon />}
                        swapIconSelection={swapIconSelection}
                        toolId={"standard__polygonale"}
                    />
                    <ToolbarTool
                        title={"libre"}
                        icon={<BorderColorOutlinedIcon />}
                        swapIconSelection={swapIconSelection}
                        toolId={"standard__libre"}
                    />
                </ToolbarTool>

                <ToolbarTool
                    title={"annuler"}
                    icon={<UndoOutlinedIcon />}
                    toolId={"standard__annuler"}
                />

                <ToolbarTool
                    title={"refaire"}
                    icon={<RedoOutlinedIcon />}
                    toolId={"standard__refaire"}
                />
            </ToolbarSection>

            {/* <SectionDemarcation /> */}

            <ToolbarSection title={"navigation"}>
                <ToolbarTool
                    title={"panoter"}
                    icon={<PanToolOutlinedIcon />}
                    toolId={"navigation__panoter"}
                />
                <ToolbarTool
                    title={"zoomer"}
                    icon={<ZoomInOutlinedIcon />}
                    toolId={"navigation__zoomer"}
                    clickFunction={zoomIn}
                />
                <ToolbarTool
                    title={"dézoomer"}
                    icon={<ZoomOutOutlinedIcon />}
                    toolId={"navigation__dezoomer"}
                />
                <ToolbarTool
                    title={"recentrer"}
                    icon={<CenterFocusWeakOutlinedIcon />}
                    toolId={"navigation__recentrer"}
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
                >
                    <ToolbarTool
                        title={"distance"}
                        icon={<SquareFootOutlinedIcon />}
                        toolId={"outils__distance"}
                        swapIconMesure={swapIconMesure}
                    />
                    <ToolbarTool
                        title={"surface"}
                        icon={<SettingsOverscanOutlinedIcon />}
                        toolId={"outils__surface"}
                        swapIconMesure={swapIconMesure}
                    />
                    <ToolbarTool
                        title={"buffer"}
                        icon={<DataUsageOutlinedIcon />}
                        toolId={"outils__buffer"}
                        swapIconMesure={swapIconMesure}
                    />
                    <ToolbarTool
                        title={"translater"}
                        icon={<OpenWithOutlinedIcon />}
                        toolId={"outils__translater"}
                        swapIconMesure={swapIconMesure}
                    />
                    <ToolbarTool
                        title={"modifier"}
                        icon={<EditAttributesOutlinedIcon />}
                        toolId={"outils__modifier"}
                        swapIconMesure={swapIconMesure}
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
                >
                    <ToolbarTool
                        title={"inactive"}
                        icon={<NotInterestedOutlinedIcon />}
                        toolId={"accroche__inactive"}
                        swapIconInactive={swapIconInactive}
                    />
                    <ToolbarTool
                        title={"point"}
                        icon={<TouchAppOutlinedIcon />}
                        toolId={"accroche__point"}
                        swapIconInactive={swapIconInactive}
                    />
                    <ToolbarTool
                        title={"segment"}
                        icon={<LinearScaleOutlinedIcon />}
                        toolId={"accroche__segment"}
                        swapIconInactive={swapIconInactive}
                    />
                    <ToolbarTool
                        title={"polyligne"}
                        icon={<TrendingFlatOutlinedIcon />}
                        toolId={"accroche__polyligne"}
                        swapIconInactive={swapIconInactive}
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
                >
                    <ToolbarTool
                        title={"cercle"}
                        icon={<FiberManualRecordOutlinedIcon />}
                        toolId={"dessin__cercle"}
                        swapIconDessin={swapIconDessin}
                    />
                    <ToolbarTool
                        title={"polyligne"}
                        icon={<TimelineOutlinedIcon />}
                        toolId={"dessin__polyligne"}
                        swapIconDessin={swapIconDessin}
                    />
                    <ToolbarTool
                        title={"polygone"}
                        icon={<ChangeHistoryOutlinedIcon />}
                        toolId={"dessin__polygone"}
                        swapIconDessin={swapIconDessin}
                    />
                </ToolbarTool>
                <ToolbarTool
                    dropdown
                    title={"guide"}
                    icon={<GridOnOutlinedIcon />}
                    toolId={"dessin__guide"}
                >
                    <ToolbarTool
                        title={"tangente"}
                        icon={<MultilineChartOutlinedIcon />}
                        toolId={"dessin__tangente"}
                    />
                    <ToolbarTool
                        title={"normale"}
                        icon={<ViewColumnOutlinedIcon />}
                        toolId={"dessin__normale"}
                    />
                </ToolbarTool>
            </ToolbarSection>

            {/* <SectionDemarcation /> */}

            <ToolbarSection title={"affichage"}>
                <ToolbarTool
                    title={"état"}
                    icon={<CheckOutlinedIcon />}
                    toolId={"affichage__etat"}
                />
                <ToolbarTool
                    dropdown
                    title={"vue"}
                    icon={iconVue}
                    toolId={"affichage__vue"}
                    swapIconVue={swapIconVue}
                >
                    <ToolbarTool
                        title={"street view"}
                        icon={<StreetviewOutlinedIcon />}
                        toolId={"affichage__streetView"}
                        swapIconVue={swapIconVue}
                    />
                    <ToolbarTool
                        title={"bing maps"}
                        icon={<MapOutlinedIcon />}
                        toolId={"affichage__bingMaps"}
                        swapIconVue={swapIconVue}
                    />
                    <ToolbarTool
                        title={"fond geoserver"}
                        icon={<EditLocationOutlinedIcon />}
                        toolId={"affichage__fondGeoserver"}
                        swapIconVue={swapIconVue}
                    />
                </ToolbarTool>
                <ToolbarTool
                    title={"thème"}
                    icon={<WbSunnyOutlinedIcon />}
                    toolId={"affichage__theme"}
                />
            </ToolbarSection>
        </div>
    );
};

export const ToolbarSection = ({ children, title }: any) => {
    return (
        <div className={styles.toolbarSection}>
            <h1>{title}</h1>
            <div className={styles.toolbarSection__tools}>{children}</div>
        </div>
    );
};

export const ToolbarTool = ({
    children,
    dropdown,
    title,
    icon,
    toolId,
    swapIconSelection,
    swapIconMesure,
    swapIconInactive,
    swapIconDessin,
    swapIconVue,
}: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);

        switch (toolId) {
            case "standard__selection":
                console.log(toolId);
                swapIconSelection(icon);
                break;

            case "standard__pointEtRectangle":
                console.log(toolId);
                swapIconSelection(icon);
                break;

            case "standard__cercle":
                console.log(toolId);
                swapIconSelection(icon);
                break;

            case "standard__polygonale":
                console.log(toolId);
                swapIconSelection(icon);
                break;

            case "standard__libre":
                console.log(toolId);
                swapIconSelection(icon);
                break;

            case "navigation__zoomer":
                console.log(toolId);
                zoomIn(map);
                break;

            case "navigation__dezoomer":
                console.log(toolId);
                zoomOut(map);
                break;

            case "outils__mesure":
                console.log(toolId);
                swapIconMesure(icon);
                break;

            case "outils__distance":
                console.log(toolId);
                swapIconMesure(icon);
                break;

            case "outils__surface":
                console.log(toolId);
                swapIconMesure(icon);
                break;

            case "outils__buffer":
                console.log(toolId);
                swapIconMesure(icon);
                break;

            case "outils__translater":
                console.log(toolId);
                swapIconMesure(icon);
                break;

            case "outils__modifier":
                console.log(toolId);
                swapIconMesure(icon);
                break;

            case "accroche__inactive":
                console.log(toolId);
                swapIconInactive(icon);
                break;

            case "accroche__point":
                console.log(toolId);
                swapIconInactive(icon);
                break;

            case "accroche__segment":
                console.log(toolId);
                swapIconInactive(icon);
                break;

            case "accroche__polyligne":
                console.log(toolId);
                swapIconInactive(icon);
                break;

            case "dessin__dessin":
                console.log(toolId);
                swapIconDessin(icon);
                break;

            case "dessin__cercle":
                console.log(toolId);
                swapIconDessin(icon);
                break;

            case "dessin__polyligne":
                console.log(toolId);
                swapIconDessin(icon);
                break;

            case "dessin__polygone":
                console.log(toolId);
                swapIconDessin(icon);
                break;

            case "dessin__guide":
                console.log(toolId);
                break;

            case "dessin__tangente":
                console.log(toolId);
                break;

            case "dessin__normale":
                console.log(toolId);
                break;

            case "affichage__vue":
                console.log(toolId);
                swapIconVue(icon);
                break;

            case "affichage__streetView":
                console.log(toolId);
                swapIconVue(icon);
                break;

            case "affichage__bingMaps":
                console.log(toolId);
                swapIconVue(icon);
                break;

            case "affichage__fondGeoserver":
                console.log(toolId);
                swapIconVue(icon);
                break;

            default:
                break;
        }
    };
    return (
        <div className={styles.toolbarTool}>
            <button onClick={handleClick}>
                <div className={styles.tool__icon}>
                    {icon} {dropdown && <KeyboardArrowDownIcon />}
                </div>
                <h2 className={styles.tool__title}>{title}</h2>
            </button>
            {isOpen && (
                <div className={styles.tool_dropdownTools}>{children}</div>
            )}
        </div>
    );
};

export const MapView = () => {
    useEffect(() => {
        map.setTarget("map");
    }, []);

    return <div id="map" className={styles.mapView}></div>;
};
