import { useContext } from "react";
import MapContext from "../../../../context/MapContext";

const useInteractions = () => {
    const map = useContext(MapContext);

    const zoomIn = () => {
        const view = map.getView();
        const zoom = view.getZoom();

        if (zoom < view.getMaxZoom()) {
            view.setZoom(zoom + 1);
        }
    };

    const zoomOut = () => {
        const view = map.getView();
        const zoom = view.getZoom();

        if (zoom < view.getMaxZoom()) {
            view.setZoom(zoom - 1);
        }
    };

    return { zoomIn: zoomIn, zoomOut: zoomOut };
};

export default useInteractions;
