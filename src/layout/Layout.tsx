import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import Header from "../components/header/header";
import styles from "./layout.module.css";

export interface LayoutProps {}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <div className={styles.mainContent}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
