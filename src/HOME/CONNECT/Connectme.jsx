import React, { useState, useEffect } from "react";
import styles from "./Connectme.module.css";

// Fire base
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { trackEvent } from "../../firebase";

// Fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

// Function
function Connectme() {
  useEffect(() => {
    trackEvent("page_view_connect", {
      page: "connect_me",
      time: Date.now(),
    });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [designArea, setDesignArea] = useState("");

  // All Social Links  Button Handle
  const handleOutboundClick = (platform) => {
    trackEvent("outbound_click", { time: Date.now(), destination: platform });
  };

  // Form Submit Button Handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        designArea,
        created: new Date(),
      });
      await trackEvent("contact_submit", {
        method: "portfolio_form",
      });
      alert("Message Sent ✅");
      setName("");
      setEmail("");
      setMessage("");
      setDesignArea("");
    } catch (error) {
      console.error("Error saving message:", error);
      alert("Failed to send message ❌");
    }
  };

  return (
    <div className={styles.Connect}>
      <div className={`${styles.mainContainer} container-fluid`}>
        <div className={`${styles.firstRow} row`}>
          <div
            className={`${styles.textSection} order-2 order-sm-1 col-md-6 col-sm-6`}
          >
            <div>
              <div className={styles.text}>
                {" "}
                <p>lets build together</p>{" "}
                <p>
                  <span>DISCUSS</span> Your Design Needs
                </p>
                <p>
                  interested in discussing new ideas, creative projects, or
                  opportunities to collaborate. feel free to reach out.
                </p>
              </div>
              <div className={styles.mail}>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
                  vishnuponoli21@gmail.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> &nbsp; +971 50432 5231
                </p>
              </div>
              <div className={styles.socials}>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/ponoli._?igsh=MTBjZTZpcnA0bXVkdg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleOutboundClick("instagram")}
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vishnu-ponoli?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwFi%2BHAE%2FTW2ZLseGc%2FRu1g%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleOutboundClick("linkedin")}
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/vishnuponoli21"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleOutboundClick("github")}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/vishnuponoli_creativ"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        console.log("CLICK WORKING");
                        console.log("TRACK FUNCTION:", trackEvent);
                        handleOutboundClick("behance");
                      }}
                    >
                      <FontAwesomeIcon icon={faBehance} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${styles.formSection} order-1 order-sm-2 col-md-6  col-sm-6`}
          >
            <div className={styles.formMain}>
              <form onSubmit={handleSubmit}>
                <div className={styles.nameInput}>
                  {" "}
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    value={name}
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.email}>
                  {" "}
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    value={email}
                    placeholder="example@mail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.designArea}>
                  <label htmlFor="text">Seclect the area needed help</label>
                  <select
                    onChange={(e) => setDesignArea(e.target.value)}
                    name="DesignArea"
                    id="DA"
                  >
                    <option value="">None</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Mobile App UI Design">
                      Mobile App UI Design
                    </option>
                    <option value="Product Design">Product Design</option>
                    <option value="Interaction Design">
                      Interaction Design
                    </option>
                    <option value="Design Systems">Design Systems</option>
                    <option value="Dashboard Design">Dashboard Design</option>
                  </select>
                </div>
                <div className={styles.message}>
                  {" "}
                  <label htmlFor="text">Message</label>
                  <textarea
                    value={message}
                    placeholder="message"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  onClick={() => {
                    console.log("send clicked");
                    trackEvent("submit_button_clicked", {
                      time: Date.now(),
                      section: "connect",
                    });
                  }}
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connectme;
