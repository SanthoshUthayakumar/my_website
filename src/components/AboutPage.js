import React from "react";
import "./AboutPage.css";
import profile from "../assets/Profile.png";
import TiltedCard from "./TiltedCard";
import ElectricBorder from './ElectricBorder'
function AboutPage() {
  return (
    <section className="about-container">

      {/* Top Section */}
      <div className="about-top">

        {/* LEFT IMAGE - TiltedCard */}
        <div className="about-image">
          <TiltedCard
            imageSrc={profile}   // ✅ use your local image
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
          <h2><center>About Me</center></h2>
          <p>
            I am a dedicated and goal-oriented second-year undergraduate student currently pursuing my degree at <b>SRM Valliammai Engineering College</b>, with a strong interest in Cybersecurity and Full-Stack Development. I am actively building technical skills.

I completed my schooling with a solid academic foundation, which helped me develop discipline, analytical thinking, and a passion for technology.

Alongside academics, I continuously work on projects, competitive coding, and cybersecurity concepts to strengthen my problem-solving abilities and prepare for high-impact technical roles.</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="about-bottom">

        <ElectricBorder color="#5227FF" speed={1} chaos={0.12} borderRadius={24}>
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
          <td>84 %</td>
        </tr>
        <tr>
          <td>Secondary School </td>
          <td>2021 - 2022</td>
          <td>83 %</td>
        </tr>
      </tbody>
    </table>
  </div>
</ElectricBorder>

       <ElectricBorder color="#00d4ff" speed={1.2} chaos={0.1} borderRadius={24}>
  <div className="glass-card">
    <h3>Technical Skills</h3>
    <table>
      <tbody>
        <tr><td>React.js</td></tr>
        <tr><td>Sql - MqSql</td></tr>
        <tr><td>Python</td></tr>
        <tr><td>Photoshop CC</td></tr>
      </tbody>
    </table>
  </div>
</ElectricBorder>
<ElectricBorder color="#00ff2f" speed={1.2} chaos={0.1} borderRadius={24}>
  <div className="glass-card">
    <h3>Hobbys</h3>
    <table>
      <tbody>
        <tr><td>Tech Community Engagement</td></tr>
        <tr><td>UI/Design Experimentation</td></tr>
        <tr><td>Building Side Projects </td></tr>
        <tr><td>Exploring New Concepts</td></tr>
      </tbody>
    </table>
  </div>
</ElectricBorder>

      </div>
      

    </section>
  );
}

export default AboutPage;