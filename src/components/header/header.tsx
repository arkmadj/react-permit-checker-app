import React from "react";
import styles from "./header.module.css";
import profile from "../../images/profile.png";
import { FaBell, FaCaretDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <span>Tasks</span>
        </div>
        <div>
          <span>Profile</span>
        </div>
        <div>
          <span>Permit</span>
        </div>
        <div>
          <span>Settings</span>
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <FaBell size={25} />
        </div>
        <div className={styles.profileDiv}>
          <span>
            <img src={profile} className={styles.profileImg} alt="profile" />
          </span>
          <FaCaretDown size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
