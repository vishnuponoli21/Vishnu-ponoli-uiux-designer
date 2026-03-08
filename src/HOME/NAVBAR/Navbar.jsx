import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div
      className={`${styles.Navbar} p-4 d-flex align-items-center justify-content-between`}
    >
      <div>
        <h2>VP</h2>
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
