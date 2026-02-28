import React, { useState } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Project from "./components/Project";
function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
  <Background />

  <div className="app-content">
    <Navbar setActivePage={setActivePage} />

    {activePage === "home" && <Hero />}
    {activePage === "about" && <AboutPage />}
    {activePage === "project" && <Project />}
    {activePage === "contact" && <ContactPage />}
  </div>
</>
  );
}

export default App;