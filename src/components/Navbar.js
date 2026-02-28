import React, { useState } from "react";

function Navbar({ setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setMenuOpen(false); // close mobile menu after click
  };

  return (
    <nav style={styles.nav}>
      
      {/* LEFT SIDE - LOGO */}
      <div style={styles.logo}>
        Vibe | Built | Win
      </div>

      {/* DESKTOP LINKS */}
      <div style={styles.linksDesktop}>
        <span style={styles.link} onClick={() => handleNavClick("home")}>Home</span>
        <span style={styles.link} onClick={() => handleNavClick("about")}>About</span>
        <span style={styles.link} onClick={() => handleNavClick("project")}>Project</span>
        <span style={styles.link} onClick={() => handleNavClick("contact")}>Contact</span>
      </div>

      {/* HAMBURGER */}
      <div
        style={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          <span style={styles.mobileLink} onClick={() => handleNavClick("home")}>Home</span>
          <span style={styles.mobileLink} onClick={() => handleNavClick("about")}>About</span>
          <span style={styles.mobileLink} onClick={() => handleNavClick("project")}>Project</span>
          <span style={styles.mobileLink} onClick={() => handleNavClick("contact")}>Contact</span>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "20px 5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 100,
    backdropFilter: "blur(10px)",
    background: "rgba(0,0,0,0.3)",
    boxSizing: "border-box"
  },

  logo: {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "2px"
  },

  linksDesktop: {
    display: window.innerWidth > 768 ? "flex" : "none",
    gap: "20px",
    cursor: "pointer"
  },

  link: {
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  },

  hamburger: {
    display: window.innerWidth <= 768 ? "block" : "none",
    fontSize: "28px",
    color: "white",
    cursor: "pointer"
  },

  mobileMenu: {
    position: "absolute",
    top: "70px",
    right: "20px",
    background: "rgba(0,0,0,0.95)",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    zIndex: 200
  },

  mobileLink: {
    color: "white",
    fontSize: "18px",
    cursor: "pointer"
  }
};

export default Navbar;