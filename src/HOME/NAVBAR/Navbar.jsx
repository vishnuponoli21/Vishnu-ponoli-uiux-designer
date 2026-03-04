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
        className={`${styles.list} w-100 d-flex align-items-center justify-content-end d-none d-md-block`}
      >
        <ul className="w-100 d-flex align-items-center justify-content-end">
          <li>
            <a href="#About">ABOUT</a>
          </li>
          <li>
            <a href="">WORKS</a>
          </li>
          <li>
            <a href="">CONNECT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
