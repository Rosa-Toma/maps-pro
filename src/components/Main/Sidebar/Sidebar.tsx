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
                <SidebarTool title={"modifier"} icon={<EditAttributesOutlined />} />
                <SidebarTool title={"translater"} icon={<ZoomOutMapOutlined />} />
                <SidebarTool title={"supprimer"} icon={<DeleteOutlineOutlined />} />
                <SidebarTool title={"référence"} icon={<DynamicFeedOutlined />} />
                <SidebarTool title={"copier"} icon={<FileCopyOutlined />} />
                <SidebarTool title={"coller"} icon={<FileCopyOutlined />} />
            </SidebarSection>

            <SidebarSection title={"impression"}>
                <SidebarTool title={"paramètres"} icon={<SettingsOutlined />} />
                <SidebarTool title={"emprise"} icon={<CropFreeOutlined />} />
                <SidebarTool title={"imprimer"} icon={<PrintOutlined />} />
                <SidebarTool title={"capture"} icon={<PhotoCameraOutlined />} />
            </SidebarSection>
        </div>
    );
};
