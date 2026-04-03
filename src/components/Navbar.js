import React, { useState, useEffect } from "react";
import GooeyNav from "./GooeyNav";
import "./Navbar.css";

function Navbar({ setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const handleNavClick = (page) => {
    setActivePage(page);
    setMenuOpen(false);
  };

  const items = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Project", page: "project" },
    { label: "Contact", page: "contact" }
  ];

  return (
    <nav className="navbar">

      <div className="logo">
        Vibe | Built | Win
      </div>

      {/* Desktop Gooey Nav */}
      {!isMobile && (
        <div className="desktopNav">
          <GooeyNav
            items={items.map(item => ({
              label: item.label,
              href: "#",
              onClick: () => handleNavClick(item.page)
            }))}
          />
        </div>
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <>
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          {menuOpen && (
            <div className="mobileMenu">
              {items.map((item, index) => (
                <span
                  key={index}
                  className="mobileLink"
                  onClick={() => handleNavClick(item.page)}
                >
                  {item.label}
                </span>
              ))}
            </div>
          )}
        </>
      )}

    </nav>
  );
}

export default Navbar;