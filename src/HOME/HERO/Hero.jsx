import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bushunted from "../../assets/IMAGE/bus hunt.png";
import nidraed from "../../assets/IMAGE/nidra.png";
import mycv from "../../assets/MYCV/vishnuPonoli.pdf";
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
        const loopAnim = gsap.timeline({ repeat: -1 });

        loopAnim
          .to(word.current, { xPercent: -13, duration: 155, ease: "none" }, 0)
          .to(
            bushunt.current,
            {
              yPercent: -15,
              duration: 20,
              ease: "none",
              yoyo: true,
              repeat: 1,
            },
            0,
          )
          .to(
            nidra.current,
            { yPercent: 15, duration: 20, ease: "none", yoyo: true, repeat: 1 },
            0,
          );

        loopAnim.timeScale(1).play();

        const setLoopSpeed = gsap.quickTo(loopAnim, "timeScale", {
          duration: 0.35,
          ease: "power2.out",
        });
        let resetSpeedDelay;

        ScrollTrigger.create({
          trigger: section.current,
          start: "top top",
          end: "bottom top",
          markers: false,
          onUpdate: (self) => {
            const velocity = self.getVelocity();
            const delta = gsap.utils.clamp(-0.5, 0.5, velocity / 2500);
            setLoopSpeed(1 + delta);

            if (resetSpeedDelay) resetSpeedDelay.kill();
            resetSpeedDelay = gsap.delayedCall(0.12, () => setLoopSpeed(1));
          },
        });

        const onLoad = () => {
          ScrollTrigger.refresh();
        };
        window.addEventListener("load", onLoad);

        return () => window.removeEventListener("load", onLoad);
      });

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
          {Array.from({ length: 112 }).map((_, i) => (
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
        <div className="containerfluid">
          <div className={`${styles.sidetext} row`}>
            <div className={`${styles.text} col-sm-3 col-md-7 `}>
              <p>
                Dedicated to <span>Crafting</span> seamless and engaging user
                experiences through thoughtful <span>Design</span>, usability
                principles, and <span>Modern</span> frontend technologies.
              </p>
            </div>
          </div>
          <div className={`${styles.socials} row`}>
            {" "}
            <div className={`col-md-6`}>
              <ul>
                <li>
                  <a
                    href="https://www.behance.net/vishnuponoli_creativ"
                    target="blank"
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={faBehance}
                      size="xl"
                      style={{ color: "#ffffffed" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vishnu-ponoli?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwFi%2BHAE%2FTW2ZLseGc%2FRu1g%3D%3D"
                    target="blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      size="xl"
                      style={{ color: "#ffffffed" }}
                    />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://github.com/vishnuponoli21" target="blank">
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
          <div className="row d-flex justify-content-end align-items-center">
            <div className={`col-md-6`}>
              <div className={`${styles.hline}`}></div>
            </div>
            <div className={`${styles.buttons} col-md-6`}>
              <a
                className={`${styles.button1} text-center`}
                href="mailto:vishnuponoli21@gmail.com"
              >
                CONNECT
              </a>
              <a
                className={`${styles.button2} text-center`}
                href={mycv}
                target="blank"
              >
                {" "}
                VIEW RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
