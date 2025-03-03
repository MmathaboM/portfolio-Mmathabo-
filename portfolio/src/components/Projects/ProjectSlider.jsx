import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectSlider.module.css";
import jonapeImage from "../../assets/projects/jonape.jpeg";
import weatherAppImage from "../../assets/projects/weather.jpeg";
import worldClockImage from "../../assets/projects/everytimezone.jpeg";

const projects = [
  {
    title: "Security Company Website",
    imageSrc: jonapeImage,
    description:
      "This is a project made to learn the latest languages by building an app.",
    demo: "https://jonape247.netlify.app/",
    source: "https://github.com/MmathaboM/JonapeSecurity",
  },
  {
    title: "Weather APP",
    imageSrc: weatherAppImage,
    description:
      "This is a project made to learn the latest languages by building an app.",
    demo: "https://skieswithmmathabo.netlify.app/",
    source: "https://github.com/MmathaboM/weatherapp",
  },
  {
    title: "World Clock",
    imageSrc: worldClockImage,
    description:
      "This is a project made to learn the latest languages by building an app.",
    demo: "https://everytimezone.netlify.app/",
    source: "https://github.com/MmathaboM/world-clock",
  },
];

const ProjectSlider = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Trigger animation when Projects section comes into view or user clicks the Projects link
  useEffect(() => {
    const projectsSection = document.getElementById("projects");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Here, you can apply the fade-in animation again when it comes into view
            entry.target.classList.add(styles.fadeIn);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(projectsSection);
    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <section id="projects" ref={ref} className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectCard}
            variants={fadeInVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSlider;
