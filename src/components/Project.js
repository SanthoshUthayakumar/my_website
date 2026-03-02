import React from "react";
import TiltedCard from "./TiltedCard";
import "./Project.css";
import ElectricBorder from "./ElectricBorder";

import trustlocal from "../assets/trustlocal.png";
import loading from "../assets/loading.jpg";
/*import threat from "../assets/threat.png";*/

function Project() {
  const projects = [
    {
      title: "Trust Local",
      image: trustlocal,
      description:
        "Trust-Local is a location-based worker hiring platform that connects users with verified local workers.",
      github: "https://github.com/SanthoshUthayakumar/Trustlocal",
    },
    {
      title: "Portfolio",
      image: loading,
      description:
        "My Protfolio",
      github: "#",
    },
    {
      title: "Loading",
      image: loading,
      description:
        "Project in process",
      github: "#",
    },
  ];

  return (
    <section className="project-container">
      <h1 className="project-title">My Projects</h1>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card-wrapper fade-in" key={index}>

           <ElectricBorder
  color="#00f5ff"
  borderRadius={20}
  className="project-electric-wrapper"
>
  <div className="project-card">

                <TiltedCard
  imageSrc={project.image}
  altText={project.title}
  captionText=""
  containerHeight="clamp(140px, 50vw, 260px)"
  containerWidth="100%"
  imageHeight="100%"
  imageWidth="100%"
  rotateAmplitude={10}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={false}
/>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    View on GitHub
                  </a>
                </div>

              </div>

            </ElectricBorder>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;