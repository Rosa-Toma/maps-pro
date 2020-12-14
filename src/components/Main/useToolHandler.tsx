import { useState } from "react";

import useInteractions from "./Toolbar/ToolbarTool/useInteractions";

export const useToolHandler = (
    toolId: any,
    icon?: any,
    swapIconSelection?: any,
    swapIconMesure?: any,
    swapIconInactive?: any,
    swapIconDessin?: any,
    swapIconVue?: any
) => {
    const { zoomIn, zoomOut } = useInteractions();

    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true)

    const handleClick = (e: any) => {
        setIsOpen(!isOpen);

        switch (toolId) {
            case "standard__selection":
                console.log(toolId);
                console.log(e.target);
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
                zoomIn();
                break;

            case "navigation__dezoomer":
                console.log(toolId);
                zoomOut();
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

            case "affichage__theme":
                console.log(toolId);
                let root = document.documentElement;
                let mapDiv : any = document.querySelector("#map");
                if (isDark) {
                    setIsDark(false)
                    root.style.setProperty("--bg-dark-primary","#E0E0E0")
                    root.style.setProperty("--bg-dark-secondary","#BDBDBD")

                    root.style.setProperty("--text-light-primary","#121212")
                    root.style.setProperty("--text-light-secondary","#1f1f1f")

                    root.style.setProperty("--shadow-1", "1px 1px 1px gray")
                    root.style.setProperty("--shadow-2", "2px 2px 2px gray")
                    root.style.setProperty("--shadow-5", "5px 5px 5px gray")
                    root.style.setProperty("--shadow-header", "0px 1px 5px gray")

                    mapDiv.style.setProperty("filter", "invert(0%)")  
                } else {
                    setIsDark(true)
                    root.style.setProperty("--bg-dark-primary","#121212")
                    root.style.setProperty("--bg-dark-secondary","#1f1f1f")

                    root.style.setProperty("--text-light-primary","#e2e2e2")
                    root.style.setProperty("--text-light-secondary","#6a6a6a")

                    root.style.setProperty("--shadow-1", "1px 1px 1px black")
                    root.style.setProperty("--shadow-2", "2px 2px 2px black")
                    root.style.setProperty("--shadow-5", "5px 5px 5px black")
                    root.style.setProperty("--shadow-header", "0px 1px 5px black")

                    mapDiv.style.setProperty("filter", "invert(100%)")
                }
                console.log(mapDiv)
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

export default useToolHandler;
