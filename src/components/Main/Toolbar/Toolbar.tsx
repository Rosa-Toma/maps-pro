import React, { useState } from "react";

import styles from "./Toolbar.module.scss";

import { ToolbarSection } from "./ToolbarSection/ToolbarSection";
import { ToolbarTool } from "./ToolbarTool";

// Icones
import {
    NearMeOutlined,
    FiberManualRecordOutlined,
    Crop32Outlined,
    BorderColorOutlined,
    UndoOutlined,
    RedoOutlined,
    PanToolOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
    CenterFocusWeakOutlined,
    SquareFootOutlined,
    SettingsOverscanOutlined,
    DataUsageOutlined,
    OpenWithOutlined,
    EditAttributesOutlined,
    NotInterestedOutlined,
    TouchAppOutlined,
    LinearScaleOutlined,
    TrendingFlatOutlined,
    TimelineOutlined,
    ChangeHistoryOutlined,
    MultilineChartOutlined,
    GridOnOutlined,
    ViewColumnOutlined,
    CheckOutlined,
    StreetviewOutlined,
    MapOutlined,
    EditLocationOutlined,
    WbSunnyOutlined,
    // Brightness2Outlined,
} from "@material-ui/icons";

export const Toolbar = () => {
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
                        icon={<NearMeOutlined />}
                        swapIconSelection={swapIconSelection}
                        toolId={"standard__pointEtRectangle"}
                    />
                    <ToolbarTool
                        title={"cercle"}
                        icon={<FiberManualRecordOutlined />}
                        swapIconSelection={swapIconSelection}
                        toolId={"standard__cercle"}
                    />
                    <ToolbarTool
                        title={"polygonale"}
                        icon={<Crop32Outlined />}
                        swapIconSelection={swapIconSelection}
                        toolId={"standard__polygonale"}
                    />
                    <ToolbarTool
                        title={"libre"}
                        icon={<BorderColorOutlined />}
                        swapIconSelection={swapIconSelection}
                        toolId={"standard__libre"}
                    />
                </ToolbarTool>

                <ToolbarTool
                    title={"annuler"}
                    icon={<UndoOutlined />}
                    toolId={"standard__annuler"}
                />

                <ToolbarTool
                    title={"refaire"}
                    icon={<RedoOutlined />}
                    toolId={"standard__refaire"}
                />
            </ToolbarSection>

            {/* <SectionDemarcation /> */}

            <ToolbarSection title={"navigation"}>
                <ToolbarTool
                    title={"panoter"}
                    icon={<PanToolOutlined />}
                    toolId={"navigation__panoter"}
                />
                <ToolbarTool
                    title={"zoomer"}
                    icon={<ZoomInOutlined />}
                    toolId={"navigation__zoomer"}
                />
                <ToolbarTool
                    title={"dézoomer"}
                    icon={<ZoomOutOutlined />}
                    toolId={"navigation__dezoomer"}
                />
                <ToolbarTool
                    title={"recentrer"}
                    icon={<CenterFocusWeakOutlined />}
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
                        icon={<SquareFootOutlined />}
                        toolId={"outils__distance"}
                        swapIconMesure={swapIconMesure}
                    />
                    <ToolbarTool
                        title={"surface"}
                        icon={<SettingsOverscanOutlined />}
                        toolId={"outils__surface"}
                        swapIconMesure={swapIconMesure}
                    />
                    <ToolbarTool
                        title={"buffer"}
                        icon={<DataUsageOutlined />}
                        toolId={"outils__buffer"}
                        swapIconMesure={swapIconMesure}
                    />
                    <ToolbarTool
                        title={"translater"}
                        icon={<OpenWithOutlined />}
                        toolId={"outils__translater"}
                        swapIconMesure={swapIconMesure}
                    />
                    <ToolbarTool
                        title={"modifier"}
                        icon={<EditAttributesOutlined />}
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
                        icon={<NotInterestedOutlined />}
                        toolId={"accroche__inactive"}
                        swapIconInactive={swapIconInactive}
                    />
                    <ToolbarTool
                        title={"point"}
                        icon={<TouchAppOutlined />}
                        toolId={"accroche__point"}
                        swapIconInactive={swapIconInactive}
                    />
                    <ToolbarTool
                        title={"segment"}
                        icon={<LinearScaleOutlined />}
                        toolId={"accroche__segment"}
                        swapIconInactive={swapIconInactive}
                    />
                    <ToolbarTool
                        title={"polyligne"}
                        icon={<TrendingFlatOutlined />}
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
                        icon={<FiberManualRecordOutlined />}
                        toolId={"dessin__cercle"}
                        swapIconDessin={swapIconDessin}
                    />
                    <ToolbarTool
                        title={"polyligne"}
                        icon={<TimelineOutlined />}
                        toolId={"dessin__polyligne"}
                        swapIconDessin={swapIconDessin}
                    />
                    <ToolbarTool
                        title={"polygone"}
                        icon={<ChangeHistoryOutlined />}
                        toolId={"dessin__polygone"}
                        swapIconDessin={swapIconDessin}
                    />
                </ToolbarTool>
                <ToolbarTool
                    dropdown
                    title={"guide"}
                    icon={<GridOnOutlined />}
                    toolId={"dessin__guide"}
                >
                    <ToolbarTool
                        title={"tangente"}
                        icon={<MultilineChartOutlined />}
                        toolId={"dessin__tangente"}
                    />
                    <ToolbarTool
                        title={"normale"}
                        icon={<ViewColumnOutlined />}
                        toolId={"dessin__normale"}
                    />
                </ToolbarTool>
            </ToolbarSection>

            {/* <SectionDemarcation /> */}

            <ToolbarSection title={"affichage"}>
                <ToolbarTool
                    title={"état"}
                    icon={<CheckOutlined />}
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
                        icon={<StreetviewOutlined />}
                        toolId={"affichage__streetView"}
                        swapIconVue={swapIconVue}
                    />
                    <ToolbarTool
                        title={"bing maps"}
                        icon={<MapOutlined />}
                        toolId={"affichage__bingMaps"}
                        swapIconVue={swapIconVue}
                    />
                    <ToolbarTool
                        title={"fond geoserver"}
                        icon={<EditLocationOutlined />}
                        toolId={"affichage__fondGeoserver"}
                        swapIconVue={swapIconVue}
                    />
                </ToolbarTool>
                <ToolbarTool
                    title={"thème"}
                    icon={<WbSunnyOutlined />}
                    toolId={"affichage__theme"}
                />
            </ToolbarSection>
        </div>
    );
};
