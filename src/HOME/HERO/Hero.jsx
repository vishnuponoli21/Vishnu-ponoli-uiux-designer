import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bushunted from "../../assets/IMAGE/bus hunt.png";
import nidraed from "../../assets/IMAGE/nidra.png";
import {
  faLinkedinIn,
  faGithub,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const word = useRef(null);
  const bushunt = useRef(null);
  const nidra = useRef(null);
  const section = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width:768px)", () => {
        // ✅ master looping timeline
        const loopAnim = gsap.timeline({ repeat: -1 });

        // Parallel animation
        loopAnim
          .to(
            word.current,
            { xPercent: -10, duration: 25, ease: "none", repeat: -1 },
            0,
          )
          .to(
            bushunt.current,
            { yPercent: -15, duration: 20, ease: "none", repeat: -1 },
            0,
          )
          .to(
            nidra.current,
            { yPercent: 15, duration: 20, ease: "none", repeat: -1 },
            0,
          );

        // Force timeline to start immediately
        loopAnim.play();

        // ✅ Scroll-triggered smooth velocity reversal
        const st = ScrollTrigger.create({
          trigger: section.current,
          start: "top 0",
          end: "bottom ",
          markers: false,
          scrub: true,
          onUpdate: (self) => {
            // velocity-based smooth reverse
            gsap.to(loopAnim, {
              timeScale: -self.getVelocity() * 0.03,
              duration: 0.4,
              ease: "power3.out",
            });
          },
        });

        // Refresh ScrollTrigger after all images/fonts load
        const onLoad = () => {
          ScrollTrigger.refresh();
        };
        window.addEventListener("load", onLoad);

        // Cleanup listener
        return () => window.removeEventListener("load", onLoad);
      });

      // SMALL DEVICES fallback
      mm.add("(max-width:767px)", () => {
        gsap.to(word.current, {
          xPercent: -7,
          duration: 12,
          repeat: -1,
          ease: "none",
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={section} className={`${styles.Hero}`}>
      <div className={`${styles.Hbg1}`}>
        <div className={`${styles.marquee}`} ref={word}>
          {Array.from({ length: 12 }).map((_, i) => (
            <h1 key={i}>VISHNU PONOLI </h1>
          ))}
        </div>
      </div>

      <div className={`${styles.Hbg2}`}>
        <div className={`${styles.vline}`}></div>
        <div className={`${styles.Containermobileframes}`}>
          <div className={`${styles.mobileframes1}`}>
            <div className={`${styles.Containerimage1}`}>
              <img ref={bushunt} src={bushunted} alt="BUS HINT FRAMES" />
            </div>
          </div>

          <div className={`${styles.mobileframes2}`}>
            <div className={`${styles.Containerimage2}`}>
              <img ref={nidra} src={nidraed} alt="BUS HINT FRAMES" />
            </div>
          </div>
        </div>

        <div className={`${styles.ux}`}>
          <h2>UI/UX DESIGNER</h2>
        </div>
      </div>

      <div className={`${styles.Hbg3}`}>
        <div className={`${styles.sidetext}`}>
          <h4>
            Dedicated UI/UX Designer passionate about creating intuitive,
            user-centered digital experiences.
          </h4>
          <div className={`${styles.socials}`}>
            <ul>
              <li>
                <a href="">
                  {" "}
                  <FontAwesomeIcon
                    icon={faBehance}
                    size="xl"
                    style={{ color: "#ffffffed" }}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="xl"
                    style={{ color: "#ffffffed" }}
                  />
                </a>
              </li>
              <li>
                {" "}
                <a href="">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="xl"
                    style={{ color: "#ffffffed" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.hline}`}></div>
        <div className={`${styles.buttons}`}>
          <div className={`${styles.button1} text-center`}>CONNECT</div>
          <div className={`${styles.button2} text-center`}>DOWNLOAD RESUME</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
