import React from "react";
import styles from "./Work.module.css";

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
            <iframe
              src="https://www.behance.net/embed/project/232225721?ilo0=1"
              height="216"
              width="404"
              allowfullscreen
              lazyload
              frameborder="0"
              allow="clipboard-write"
              refererPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div className="col-md-4 text-center">
            <iframe
              src="https://www.behance.net/embed/project/228877529?ilo0=1"
              height="216"
              width="404"
              allowfullscreen
              lazyload
              frameborder="0"
              allow="clipboard-write"
              refererPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div className="col-md-4 text-center">
            <iframe
              src="https://www.behance.net/embed/project/232225721?ilo0=1"
              height="216"
              width="404"
              allowfullscreen
              lazyload
              frameborder="0"
              allow="clipboard-write"
              refererPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
        <div className="row h-30 d-flex justify-content-center">
          <div className="col-md-4 text-center">
            <iframe
              src="https://www.behance.net/embed/project/229832893?ilo0=1"
              height="216"
              width="404"
              allowfullscreen
              lazyload
              frameborder="0"
              allow="clipboard-write"
              refererPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div className="col-md-4 text-center">
            <iframe
              src="https://www.behance.net/embed/project/230034595?ilo0=1"
              height="216"
              width="404"
              allowfullscreen
              lazyload
              frameborder="0"
              allow="clipboard-write"
              refererPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div className="col-md-4 text-center">
            <iframe
              src="https://www.behance.net/embed/project/234933749?ilo0=1"
              height="216"
              width="404"
              allowfullscreen
              lazyload
              frameborder="0"
              allow="clipboard-write"
              refererPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
