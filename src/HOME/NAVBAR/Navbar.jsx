import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/IMAGE/logoWhite.svg";

function Navbar() {
  return (
    <div
      className={`${styles.Navbar} p-4 d-flex align-items-center justify-content-between`}
    >
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div
        className={`${styles.list} d-flex justify-content-center align-items-center`}
      >
        hello
      </div>
    </div>
  );
}

export default Navbar;
