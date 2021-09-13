import React from "react";
import styles from "./sidebaritem.module.css";
import { Link } from "react-router-dom";

export interface SidebarItemProps {
  name: string;
  link: string;
}

const SideBarItem: React.FC<SidebarItemProps> = ({ name, link, children }) => {
  return (
    // <Link to={link}>
      <div className={styles.sidebarItem}>
        <Link to={link} className={styles.sidebarLink}>
        {children}
        <span>{name}</span>
        </Link>
      </div>
    // </Link>
  );
};

export default SideBarItem;
