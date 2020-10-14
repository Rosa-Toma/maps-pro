import React from "react";

import { SidebarTabSection } from "./SidebarTabSection/SidebarTabSection";
import { SidebarTab } from "./SidebarTab/SidebarTab";

import { SidebarSection } from "./SidebarSection/SidebarSection";
import { SidebarTool } from "./SidebarTool/SidebarTool";

import styles from "./Sidebar.module.scss";

import {
    EditAttributesOutlined,
    ZoomOutMapOutlined,
    DeleteOutlineOutlined,
    DynamicFeedOutlined,
    FileCopyOutlined,
    SettingsOutlined,
    CropFreeOutlined,
    PrintOutlined,
    PhotoCameraOutlined,
} from "@material-ui/icons";

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <SidebarTabSection>
                <SidebarTab title={"tab"} />
                <SidebarTab title={"tab"} />
                <SidebarTab title={"tab"} />
            </SidebarTabSection>

            <SidebarSection title={"Objets"}>
                <SidebarTool title={"modifier"} icon={<EditAttributesOutlined />} toolId={"objets__modifier"} />
                <SidebarTool title={"translater"} icon={<ZoomOutMapOutlined />} toolId={"objets__translater"} />
                <SidebarTool title={"supprimer"} icon={<DeleteOutlineOutlined />} toolId={"objets__supprimer"} />
                <SidebarTool title={"référence"} icon={<DynamicFeedOutlined />} toolId={"objets__reference"} />
                <SidebarTool title={"copier"} icon={<FileCopyOutlined />} toolId={"objets__copier"} />
                <SidebarTool title={"coller"} icon={<FileCopyOutlined />} toolId={"objets__coller"} />
            </SidebarSection>

            <SidebarSection title={"impression"}>
                <SidebarTool title={"paramètres"} icon={<SettingsOutlined />} toolId={"impression__parametres"} />
                <SidebarTool title={"emprise"} icon={<CropFreeOutlined />} toolId={"impression__emprise"} />
                <SidebarTool title={"imprimer"} icon={<PrintOutlined />} toolId={"impression__imprimer"} />
                <SidebarTool title={"capture"} icon={<PhotoCameraOutlined />} toolId={"impression__capture"} />
            </SidebarSection>
        </div>
    );
};
