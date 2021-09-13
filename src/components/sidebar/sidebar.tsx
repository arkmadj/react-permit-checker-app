import React from "react";
import styles from "./sidebar.module.css";
import SideBarItem from "../sidebaritem/SideBarItem";
import {
  VscGraph,
  VscBook,
  VscRuby,
  //   VscThreeBars,
  VscColorMode,
  VscChecklist,
  VscLocation,
} from "react-icons/vsc";

export interface SideBarProps {}

const Sidebar: React.FC<SideBarProps> = () => {
  const sideBarItems = [
    {
      name: "Dashboard",
      link: "/",
      icon: <VscGraph size={30} className={styles.sidebar_item_icon} />,
    },
    {
      name: "Permits",
      link: "",
      icon: <VscChecklist size={30} className={styles.sidebar_item_icon} />,
    },
    {
      name: "Invoices",
      link: "",
      icon: <VscBook size={30} className={styles.sidebar_item_icon} />,
    },
    {
      name: "Zones",
      link: "",
      icon: <VscLocation size={30} className={styles.sidebar_item_icon} />,
    },
    {
      name: "Change Theme",
      link: "",
      icon: <VscColorMode size={30} className={styles.sidebar_item_icon} />,
    },
  ];
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo_content}>
        <VscRuby className={styles.logo_icon} />
        <span>Checker</span>
      </div>
      {/* <VscThreeBars className={styles.menu_bar}/> */}
      {sideBarItems.map((item, index) => (
        <SideBarItem key={index} name={item.name} link={item.link}>
          {item.icon}
        </SideBarItem>
      ))}
    </div>
  );
};

export default Sidebar;
