import React, { useRef } from "react";
import "./ContactPage.css";
import VariableProximity from "./VariableProximity";
import ElectricBorder from "./ElectricBorder";
import { FaInstagram, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
const styles = {
  socialContainer: {
    display: "flex",
    gap: "25px",
    marginTop: "25px",
    fontSize: "clamp(1.2rem, 3vw, 3rem)",
    justifyContent: "center"
  },

  icon: {
    color: "white",
    transition: "0.3s",
    textDecoration: "none"
  }
};
function ContactPage() {

  const containerRef = useRef(null);   // ✅ INSIDE component

  return (
    <section className="contact-container">

      <div className="contact-layout">

        {/* LEFT SIDE TEXT */}
        <div className="contact-left">
          <div
            ref={containerRef}
            style={{ position: "relative" }}
          >
            <VariableProximity
              label={"Do you want to know more about me?"}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={230}
              falloff="exponential"   // ✅ Only one
            />
          </div>
        </div>
        {/* RIGHT SIDE TABLE */}
        <div className="contact-right">
  <ElectricBorder color="#00f5ff">
    <div className="contact-table-box">

      {/* Social Icons */}
      <div style={styles.socialContainer}>
        <a 
          href="https://www.instagram.com/fr.leodas/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaInstagram />
        </a>
      
        <a 
          href="https://x.com/Mr_Santhosh18" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaXTwitter />
        </a>
      
        <a 
          href="https://www.linkedin.com/in/santhosh-uthayakumar/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaLinkedin />
        </a>
      
        <a 
          href="https://github.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaGithub />
        </a>
      </div>
      
      {/* Email */}
      <p className="contact-email">
        mrsanthoshoffical18@gmail.com
      </p>

      {/* Phone */}
      <p className="contact-phone">
        +91 8072409470
      </p>

    </div>
  </ElectricBorder>
</div>

      </div>
    {/* Footer */}
<div className="contact-footer">
  <h4><b>Universe Always Fall In Love With Stubborn Hearts</b></h4><br></br>
  <p>
    © {new Date().getFullYear()} Santhosh Uthayakumar. All Rights Reserved.
  </p>
</div>
    </section>
  );
}

export default ContactPage;