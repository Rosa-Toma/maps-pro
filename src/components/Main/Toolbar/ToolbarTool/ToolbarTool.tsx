import React, { useContext } from "react";

import useToolHandler from "../../../../hooks/useToolHandler";
import useHotKeys from "../../../../hooks/useHotKeys";

import styles from "./ToolbarTool.module.scss";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { GlobalHotKeys } from "react-hotkeys";

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
    const { handleClick, isOpen } = useToolHandler(
        toolId,
        icon,
        swapIconSelection,
        swapIconMesure,
        swapIconInactive,
        swapIconDessin,
        swapIconVue
    );

    const { keyMap, handlers } = useHotKeys();
    return (
        <div className={styles.toolbarTool} id={toolId}>
            <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
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
