import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Home.module.css";
import Hero from "./HERO/Hero";
import Navbar from "./NAVBAR/Navbar";
import About from "./ABOUT/About";
import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const scrollContainer = useRef(null);
  const curve = useRef();

  useEffect(() => {
    const scrollEl = scrollContainer.current;
    if (!scrollEl) return;

    const scroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
      },
      scrollCallback: () => ScrollTrigger.update(),
    });

    const onRefresh = () => scroll.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      scroll.destroy();
    };
  }, []);

  useGSAP(() => {
    gsap.to(curve.current, {
      yPercent: 45,
      duration: 3,
      scrollTrigger: {
        trigger: curve.current,
        start: "top 30%",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
  });
  return (
    <>
      <div
        ref={scrollContainer}
        data-scroll-container
        className={`${styles.Home}`}
      >
        <div>
          <Navbar />
        </div>

        <div className={`${styles.heromain}`}>
          <Hero />
        </div>
        <div className={`${styles.CurveContainer}`}>
          <svg
            ref={curve}
            className={styles.curve}
            width="1920"
            height="275"
            viewBox="0 0 1920 275"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1920 0H0V171C0 171 408.5 275 960 275C1511.5 275 1920 171 1920 171V0Z"
              fill="url(#paint0_linear_1349_368)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1349_368"
                x1="960"
                y1="0"
                x2="960"
                y2="170"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7C40B3" />
                <stop offset="1" stopColor="#431CA2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className={`${styles.About}`}>
          <About />
        </div>
        {/* <div className={`${styles.Works}`}>hello</div> */}
      </div>
    </>
  );
}

export default Home;
