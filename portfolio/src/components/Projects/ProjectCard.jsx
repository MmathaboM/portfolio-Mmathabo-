// ProjectCard.jsx
import React from "react";
import styles from "./ProjectCard.module.css";

// Import all project images
import jonapeImage from "../../assets/projects/jonape.jpeg";
import weatherAppImage from "../../assets/projects/weather.jpeg";
import worldClockImage from "../../assets/projects/everytimezone.jpeg";
import healthCareImage from "../../assets/projects/prince.jpeg";

// Create an image mapping object
const projectImages = {
  "Security Company Website": jonapeImage,
  "Weather APP": weatherAppImage,
  "World Clock": worldClockImage,
  "Health Care": healthCareImage,
};

export const ProjectCard = ({
  project: { title, imageSrc, description, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={projectImages[title] || imageSrc}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Demo
        </a>
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Source
        </a>
      </div>
    </div>
  );
};
