import React, { useRef } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/IMAGE/logoWhite.svg";
import gsap from "gsap";

function Navbar() {
  const menuRef = useRef(null);
  const hambutton = useRef(null);
  const menuOpen = useRef(false);

  const toggleMenu1 = () => {
    const hamburgerDiv = hambutton.current.querySelector(
      `.${styles.hamburger}`,
    );

    if (!menuOpen.current) {
      gsap.to(menuRef.current, {
        x: "0%",
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(hamburgerDiv, {
        x: -menuRef.current.offsetWidth,
        rotate: 90,
        duration: 0.6,
        ease: "power3.out",
      });

      menuOpen.current = true;
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power3.in",
      });

      gsap.to(hamburgerDiv, {
        x: 0,
        rotate: 0,
        duration: 0.6,
        ease: "power3.in",
      });

      menuOpen.current = false;
    }
  };

  const toggleMenu2 = () => {
    const hamburgerDiv = hambutton.current.querySelector(
      `.${styles.hamburger}`,
    );

    gsap.to(menuRef.current, {
      x: "100%",
      duration: 0.6,
      ease: "power3.in",
    });
    gsap.to(hamburgerDiv, {
      x: 0,
      rotate: -180,
      duration: 0.6,
      ease: "power3.in",
    });

    menuOpen.current = false;
  };

  // SCROLL FUNCTION
  const scrollToSection = (id) => {
    if (window.locoScroll) {
      window.locoScroll.scrollTo(`#${id}`, {
        offset: 0,
        duration: 800,
      });
    }

    toggleMenu2();
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div ref={hambutton} className={styles.list}>
        <div onClick={toggleMenu1} className={styles.hamburger}>
          <svg
            className={styles.hamburgerIcon}
            width="26"
            height="90"
            viewBox="0 0 426 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="426" height="67" rx="33.5" fill="white" />
            <rect y="123" width="426" height="67" rx="33.5" fill="white" />
          </svg>
        </div>

        <div ref={menuRef} className={styles.navItems}>
          <ul>
            <li onClick={() => scrollToSection("Home")}>HOME</li>
            <li onClick={() => scrollToSection("About")}>ABOUT</li>
            <li onClick={() => scrollToSection("Work")}>PROJECTS</li>
            <li onClick={() => scrollToSection("Connect")}>CONNECT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
