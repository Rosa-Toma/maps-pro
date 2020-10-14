import React /*, { useContext }*/ from "react";

import useToolHandler from "../../../../hooks/useToolHandler";

import styles from "./SidebarTool.module.scss";

export const SidebarTool = ({ title, icon, toolId }: any) => {
    const { handleClick } = useToolHandler(toolId);

    return (
        <div className={styles.sidebarTool} id={toolId}>
            <button onClick={handleClick}>
                <div className={styles.sidebarTool__icon}>{icon}</div>
                <h2 className={styles.sidebarTool__title}>{title}</h2>
            </button>
        </div>
    );
};
