const useInteractions = () => {
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

    return { zoomIn: zoomIn, zoomOut: zoomOut };
};

export default useInteractions;
