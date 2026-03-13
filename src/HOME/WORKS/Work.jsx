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
            <a href="">
              <div className={styles.projectImages}>
                <img src={bushunt} alt="" />
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center">
            <a href="">
              <div className={styles.projectImages}>
                <img src={evox} alt="" />
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center">
            {" "}
            <a href="">
              <div className={styles.projectImages}>
                <img src={nidra} alt="" />
              </div>
            </a>
          </div>
        </div>
        <div className="row h-30 d-flex justify-content-center">
          <div className="col-md-4 text-center">
            <a href="">
              <div className={styles.projectImages}>
                <img src={orvento} alt="" />
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center">
            <a href="">
              <div className={styles.projectImages}>
                <img src={paybee} alt="" />
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center">
            <a href="">
              <div className={styles.projectImages}>
                <img src={terrapod} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
