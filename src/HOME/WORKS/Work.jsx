import React from "react";
import styles from "./Work.module.css";
import bushunt from "../../assets/IMAGE/projects/bushunt.png";
import evox from "../../assets/IMAGE/projects/evox.png";
import nidra from "../../assets/IMAGE/projects/nidra.png";
import orvento from "../../assets/IMAGE/projects/orvento.png";
import paybee from "../../assets/IMAGE/projects/paybee.png";
import terrapod from "../../assets/IMAGE/projects/terrapod.png";

function Work() {
  return (
    <div className={styles.Work}>
      <div className="container-fluid">
        <div className="row mb-5 mx-5">
          {" "}
          <div className="col-md-6">
            <h1 className={styles.workText}>Projects</h1>
          </div>
        </div>
        <div className="row  mb-5 h-30 d-flex justify-content-center">
          <div className="col-md-4 text-center">
            <a href="https://www.behance.net/gallery/232225721/Bus-Hunt">
              <div className={styles.projectImages}>
                <img src={bushunt} alt="bushunt" />
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center">
            <a href="https://www.behance.net/gallery/234933749/EVOX">
              <div className={styles.projectImages}>
                <img src={evox} alt="evox" />
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center">
            {" "}
            <a href="https://www.behance.net/gallery/233199689/NIDRA">
              <div className={styles.projectImages}>
                <img src={nidra} alt="nidra" />
              </div>
            </a>
          </div>
        </div>
        <div className="row h-30 d-flex justify-content-center">
          <div className="col-md-4 text-center">
            <a href="https://www.behance.net/gallery/230034595/Orvento-Event-Management-UI">
              <div className={styles.projectImages}>
                <img src={orvento} alt="orvento" />
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center">
            <a href="https://www.behance.net/gallery/228877529/paybee">
              <div className={styles.projectImages}>
                <img src={paybee} alt="paybee" />
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center">
            <a href="https://www.behance.net/gallery/229832893/Terrapod-Indoor-Plant-Brand-Identity-UI-Design">
              <div className={styles.projectImages}>
                <img src={terrapod} alt="terrapod" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
