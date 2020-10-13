import React, { useContext } from "react";

import styles from "./SidebarTool.module.scss";

import MapContext from "../../../../context/MapContext";

export const SidebarTool = ({ children, title, icon, toolId }: any) => {
    const map = useContext(MapContext);

    const handleClick = () => {
        switch (toolId) {
            default:
                break;
        }
    };
    return (
        <div className={styles.sidebarTool}>
            <button onClick={handleClick}>
                <div className={styles.sidebarTool__icon}>{icon}</div>
                <h2 className={styles.sidebarTool__title}>{title}</h2>
            </button>
        </div>
    );
};
