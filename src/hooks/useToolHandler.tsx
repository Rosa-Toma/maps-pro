import { useState, useContext } from "react";

import useInteractions from "../hooks/useInteractions";

import MapContext from "../context/MapContext";

export const useTool = (
    toolId: any,
    icon?: any,
    swapIconSelection?: any,
    swapIconMesure?: any,
    swapIconInactive?: any,
    swapIconDessin?: any,
    swapIconVue?: any
) => {
    const map = useContext(MapContext);

    const { zoomIn, zoomOut } = useInteractions();

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
            case "objets__modifier":
                console.log(toolId);
                break;
            case "objets__translater":
                console.log(toolId);
                break;
            case "objets__supprimer":
                console.log(toolId);
                break;
            case "objets__reference":
                console.log(toolId);
                break;
            case "objets__copier":
                console.log(toolId);
                break;
            case "objets__coller":
                console.log(toolId);
                break;
            case "impression__parametres":
                console.log(toolId);
                break;
            case "impression__emprise":
                console.log(toolId);
                break;
            case "impression__imprimer":
                console.log(toolId);
                break;
            case "impression__capture":
                console.log(toolId);
                break;
            default:
                break;
        }
    };
    return { handleClick: handleClick, isOpen: isOpen };
};

export default useTool;
