import React from "react";
import "./AboutPage.css";
import profile from "../assets/Profile.png";
import TiltedCard from "./TiltedCard";
import ElectricBorder from "./ElectricBorder";
import DomeGallery from "./DomeGallery";

function AboutPage() {
  return (
    <section className="about-container">

      {/* TOP SECTION */}
      <div className="about-top">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <TiltedCard
            imageSrc={profile}
            altText="Santhosh Profile"
            captionText="Santhosh Uthayakumar"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={15}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p>
            I am a dedicated and goal-oriented second-year undergraduate student
            currently pursuing my degree at <b>SRM Valliammai Engineering College</b>,
            with a strong interest in Cybersecurity and Full-Stack Development.

            

            I completed my schooling with a solid academic foundation, which helped
            me develop discipline, analytical thinking, and a passion for technology.

            

            Alongside academics, I continuously work on projects, competitive coding,
            and cybersecurity concepts to strengthen my problem-solving abilities
            and prepare for high-impact technical roles.
          </p>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="about-bottom">

        {/* Qualification */}
        <ElectricBorder color="#5227FF">
          <div className="glass-card">
            <h3>Qualification</h3>
            <table>
              <tbody>
                <tr>
                  <td>B.E Cybersecurity</td>
                  <td>2024 - 2028</td>
                  <td>8.6 CGPA</td>
                </tr>
                <tr>
                  <td>Higher Secondary</td>
                  <td>2022 - 2024</td>
                  <td>84%</td>
                </tr>
                <tr>
                  <td>Secondary School</td>
                  <td>2021 - 2022</td>
                  <td>83%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ElectricBorder>

        {/* Skills */}
        <ElectricBorder color="#00d4ff">
          <div className="glass-card">
            <h3>Technical Skills</h3>
            <table>
              <tbody>
                <tr><td>React.js</td></tr>
                <tr><td>SQL - MySQL</td></tr>
                <tr><td>Python</td></tr>
                <tr><td>Photoshop CC</td></tr>
              </tbody>
            </table>
          </div>
        </ElectricBorder>

        {/* Hobbies */}
        <ElectricBorder color="#00ff2f">
          <div className="glass-card">
            <h3>Hobbies</h3>
            <table>
              <tbody>
                <tr><td>Tech Community Engagement</td></tr>
                <tr><td>UI/Design Experimentation</td></tr>
                <tr><td>Building Side Projects</td></tr>
                <tr><td>Exploring New Concepts</td></tr>
              </tbody>
            </table>
          </div>
        </ElectricBorder>

      </div>

      {/* CERTIFICATES 
      <div className="certificate-section">
        <h2>Certificates</h2>

        <div className="certificate-gallery">
          <DomeGallery
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={24}
            dragDampening={5}
          />
        </div>
      </div>*/}

    </section>
  );
}

export default AboutPage;