import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

import styles from "./Home.module.css";
import Hero from "./HERO/Hero";
import Navbar from "./NAVBAR/Navbar";
import About from "./ABOUT/About";
import Work from "./WORKS/Work";

import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollRef = useRef(null);
  const curveRef = useRef(null);
  const horizontalRef = useRef(null);
  const locoScroll = useRef(null);
  const [navDark, setNavDark] = useState(false);

  useLayoutEffect(() => {
    if (!scrollRef.current) return;

    // Initialize LocomotiveScroll
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      smartphone: { smooth: false },
      tablet: { smooth: false },
    });

    // ScrollTrigger proxy
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          locoScroll.current.scrollTo(value, {
            duration: 0,
            disableLerp: true,
          });
        } else {
          return locoScroll.current.scroll.instance.scroll.y;
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
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    locoScroll.current.on("scroll", ScrollTrigger.update);

    // Force refresh after all images/fonts loaded (build safe)
    const onLoad = () => {
      ScrollTrigger.refresh();
      locoScroll.current.update();
    };
    window.addEventListener("load", onLoad);

    // ----------------- GSAP Animations -----------------
    const mm = gsap.matchMedia();

    // Navbar color toggle
    ScrollTrigger.create({
      trigger: `.${styles.panel}`,
      scroller: scrollRef.current,
      start: "top top",
      onEnter: () => setNavDark(true),
      onLeaveBack: () => setNavDark(false),
    });

    mm.add("(min-width: 577px)", () => {
      if (!curveRef.current || !horizontalRef.current) return;

      // Curve animation
      gsap.to(curveRef.current, {
        yPercent: -55,
        scrollTrigger: {
          trigger: curveRef.current,
          scroller: scrollRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Horizontal scroll pinning
      const sections = gsap.utils.toArray(
        `.${styles.panel}`,
        horizontalRef.current,
      );

      const totalScroll = horizontalRef.current.scrollWidth - window.innerWidth;

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          scroller: scrollRef.current,
          trigger: horizontalRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });
    });

    // Cleanup
    return () => {
      window.removeEventListener("load", onLoad);
      if (locoScroll.current) locoScroll.current.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className={styles.Home}>
      <Navbar navDark={navDark} />

      <div className={styles.heromain}>
        <Hero />
      </div>

      <div className={styles.CurveContainer}>
        <svg
          ref={curveRef}
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

      <div
        ref={horizontalRef}
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
