import { useEffect, useState } from "react";
import styles from "./Customcursor.module.css";

function Customcursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={styles.Customcursor}
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#11002193",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    />
  );
}

export default Customcursor;
