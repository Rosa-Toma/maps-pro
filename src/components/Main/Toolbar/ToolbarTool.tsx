import React, { useState, useContext } from "react";

import styles from "./ToolbarTool.module.scss";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MapContext from "../../../context/MapContext";

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
    const map = useContext(MapContext);

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
