import React from "react";

import { SidebarTabSection } from "./SidebarTabSection/SidebarTabSection";
import { SidebarTab } from "./SidebarTab/SidebarTab";

import { SidebarSection } from "./SidebarSection/SidebarSection";
import { SidebarTool } from "./SidebarTool/SidebarTool";

import styles from "./Sidebar.module.scss";

import KeyboardArrowLeftOutlinedIcon from "@material-ui/icons/KeyboardArrowLeftOutlined";
import EditAttributesOutlinedIcon from "@material-ui/icons/EditAttributesOutlined";
import ZoomOutMapOutlinedIcon from "@material-ui/icons/ZoomOutMapOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import DynamicFeedOutlinedIcon from "@material-ui/icons/DynamicFeedOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import CropFreeOutlinedIcon from "@material-ui/icons/CropFreeOutlined";
import PrintOutlinedIcon from "@material-ui/icons/PrintOutlined";
import PhotoCameraOutlinedIcon from "@material-ui/icons/PhotoCameraOutlined";

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <SidebarTabSection>
                <SidebarTab />
                <SidebarTab />
                <SidebarTab />
            </SidebarTabSection>

            <SidebarSection title={"Objets"}>
                <SidebarTool title={"modifier"} icon={<EditAttributesOutlinedIcon />} />
                <SidebarTool title={"translater"} icon={<ZoomOutMapOutlinedIcon />} />
                <SidebarTool title={"supprimer"} icon={<DeleteOutlineOutlinedIcon />} />
                <SidebarTool title={"référence"} icon={<DynamicFeedOutlinedIcon />} />
                <SidebarTool title={"copier"} icon={<FileCopyOutlinedIcon />} />
                <SidebarTool title={"coller"} icon={<FileCopyOutlinedIcon />} />
            </SidebarSection>

            <SidebarSection title={"impression"}>
                <SidebarTool title={"paramètres"} icon={<SettingsOutlinedIcon />} />
                <SidebarTool title={"emprise"} icon={<CropFreeOutlinedIcon />} />
                <SidebarTool title={"imprimer"} icon={<PrintOutlinedIcon />} />
                <SidebarTool title={"capture"} icon={<PhotoCameraOutlinedIcon />} />
            </SidebarSection>
        </div>
    );
};
