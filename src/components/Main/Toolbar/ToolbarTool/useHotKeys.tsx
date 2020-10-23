import useInteractions from "./useInteractions";

const useHotKeys = () => {
    const { zoomIn, zoomOut } = useInteractions();

    const keyMap = {
        ZOOM: "up",
        UNZOOM: "down",
    };

    const handlers = {
        ZOOM: zoomIn,
        UNZOOM: zoomOut,
    };

    return { keyMap: keyMap, handlers: handlers };
};

export default useHotKeys;
