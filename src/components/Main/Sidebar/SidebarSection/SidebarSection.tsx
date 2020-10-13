import React, { useState } from "react";

import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

import styles from "./SidebarSection.module.scss";

export const SidebarSection = ({ children, title }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={styles.sidebarSection}>
            <div className={styles.sidebarSection__title}>
                <h1>{title}</h1>
                <button onClick={handleClick}>
                    {isOpen ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
                </button>
            </div>
            <div className={styles.sidebarSection__tools}>
                {isOpen && children}
            </div>
        </div>
    );
};
