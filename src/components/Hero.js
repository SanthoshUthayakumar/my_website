import React from "react";
import Shuffle from "./Shuffle";
import TrueFocus from './TrueFocus';
import ProfileImage from "./ProfileImage";
import { FaInstagram, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
const styles = {
  socialContainer: {
    display: "flex",
    gap: "25px",
    marginTop: "25px",
    fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
    justifyContent: "center"
  },

  icon: {
    color: "white",
    transition: "0.3s",
    textDecoration: "none"
  }
};
function Hero() {
  return (
    <section
  id="home"
  style={{
    position: "relative",
    zIndex: 1,
    color: "white",
    textAlign: "center",
    padding: "80px 20px",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}
>
  <ProfileImage />


      <div className="home-info">
        <Shuffle
  text="SANTHOSH UTHAYAKUMAR"
  tag="h1"
  shuffleDirection="right"
  duration={0.4}
  stagger={0.04}
  shuffleTimes={2}
  colorFrom="#888"
  colorTo="#ffffff"
  triggerOnce={true}
/>
       <TrueFocus 
sentence="Byte-Buddy Engineer Designer Web-Developer "
manualMode
blurAmount={5.5}
borderColor="#42ff29"
animationDuration={0.5}
pauseBetweenAnimations={1}
/> 
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
          </div>
          
    </section>
  );
}

export default Hero;