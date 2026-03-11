import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";

import styles from "./Home.module.css";
import Hero from "./HERO/Hero";
import Navbar from "./NAVBAR/Navbar";
import About from "./ABOUT/About";
import Work from "./WORKS/Work";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const scrollContainer = useRef(null);
  const curve = useRef(null);
  const horizontalContainer = useRef(null);
  const [navDark, setNavDark] = useState(false);

  let locoScroll;

  /* ---------------- LOCOMOTIVE ---------------- */
  useEffect(() => {
    window.scrollTo(0, 0);

    // Initialize LocomotiveScroll
    locoScroll = new LocomotiveScroll({
      el: scrollContainer.current,
      smooth: true,
      smartphone: { smooth: false },
      tablet: { smooth: false },
    });

    // Connect GSAP ScrollTrigger with LocomotiveScroll
    ScrollTrigger.scrollerProxy(scrollContainer.current, {
      scrollTop(value) {
        if (arguments.length) {
          locoScroll.scrollTo(value, { duration: 0 });
        } else {
          return locoScroll.scroll?.y || window.scrollY;
        }
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // RequestAnimationFrame sync
    const raf = () => {
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      locoScroll.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  /* ---------------- GSAP ---------------- */
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Navbar color change
    ScrollTrigger.create({
      trigger: ".panel",
      scroller: scrollContainer.current,
      start: "top top",
      onEnter: () => setNavDark(true),
      onLeaveBack: () => setNavDark(false),
    });

    // Desktop animations
    mm.add("(min-width: 577px)", () => {
      if (!curve.current || !horizontalContainer.current) return;

      // Curve animation
      gsap.to(curve.current, {
        yPercent: 45,
        scrollTrigger: {
          trigger: curve.current,
          scroller: scrollContainer.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Horizontal scroll sections
      const sections = gsap.utils.toArray(
        ".panel",
        horizontalContainer.current,
      );
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalContainer.current,
          scroller: scrollContainer.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () =>
            "+=" +
            (horizontalContainer.current.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
        },
      });
    });
  });

  /* ---------------- JSX ---------------- */
  return (
    <div ref={scrollContainer} data-scroll-container className={styles.Home}>
      <Navbar navDark={navDark} />

      <div className={styles.heromain}>
        <Hero />
      </div>

      {/* CURVE */}
      <div className={styles.CurveContainer}>
        <svg
          ref={curve}
          className={styles.curve}
          width="1120"
          height="275"
          viewBox="0 0 1920 275"
          fill="none"
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

      {/* HORIZONTAL SCROLL SECTIONS */}
      <div
        ref={horizontalContainer}
        className={`${styles.HorizontalScrollWrapper} d-flex`}
      >
        <div className={styles.scrollWrapper}>
          <section className={`panel ${styles.panel} ${styles.About}`}>
            <About />
          </section>
          <section className={`panel ${styles.panel} ${styles.Works}`}>
            <Work />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
