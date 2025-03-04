import React from "react";
import styles from "./About.module.css";
import about from "../../assets/about/about.jpeg";
import resumePdf from "../../assets/hero/Mmathabo M Resume 2025  (4).pdf"; // Import the PDF file

export const About = () => {
  return (
    <section className={`animated-section ${styles.container}`} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.subtitle}>
        <div className={styles.divider}>
          <div className={styles.dividerHighlight}></div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={about} alt="about image" className={styles.aboutImage} />
        </div>

        <div className={styles.textContent}>
          <p className={styles.bio}>
            I’m Mmathabo Mphahlele, a passionate Software Developer with a BSc
            in Mathematics,majoring in Computer Science and Statistics. My
            passion lies in crafting efficient, user-friendly applications that
            make a meaningful impact. I thrive on continuous learning and growth
            within the ever-evolving tech industry, and I’m always eager to
            embrace new challenges and opportunities to further expand my
            expertise.
          </p>

          <div className={styles.highlights}>
            <h3>Here are a Few Highlights:</h3>
            <ul className={styles.highlightsList}>
              <li>
                <span className={styles.bullet}></span> Full-Stack Web Developer
              </li>
              <li>
                <span className={styles.bullet}></span> Interactive Front-End
                Development Based on Design
              </li>
              <li>
                <span className={styles.bullet}></span> Front-End Development
                with React and Vue.js
              </li>
              <li>
                <span className={styles.bullet}></span> State Management with
                Redux and Pinia
              </li>
              <li>
                <span className={styles.bullet}></span> Building REST APIs with
                C# .NET
              </li>
              <li>
                <span className={styles.bullet}></span> Database Management
              </li>
            </ul>
          </div>
          <div className={styles.buttons}>
            <a
              href="mailto:mmathabom99@gmail.com"
              className={styles.btnPrimary}
            >
              Hire Me
            </a>
            <a
              href={resumePdf} // Use the imported PDF file
              download="Mmathabo_Mphahlele_Resume.pdf"
              className={styles.btnSecondary}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
