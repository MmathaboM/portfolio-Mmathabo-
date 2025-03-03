import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBriefcase,
  FaFigma,
} from "react-icons/fa";
import { SiGraphql, SiMongodb } from "react-icons/si";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { FaGithub, FaVuejs, FaJsSquare } from "react-icons/fa"; // ✅ GitHub & Vue.js
import { DiVisualstudio, DiDotnet } from "react-icons/di"; // ✅ C# & .NET
// import { SiCsharp } from "react-icons/si"; // ✅ Correct C# icon
import csharp from "../../assets/skills/c-sharp-c.svg";

export const Experience = () => {
  const skillIcons = {
    HTML: <FaHtml5 color="#E44D26" size={40} />,
    CSS: <FaCss3Alt color="#1572B6" size={40} />,
    React: <FaReact color="#61DAFB" size={40} />,
    JavaScript: <FaJsSquare color="#F7DF1E" size={40} />,
    Experience: <FaBriefcase color="#61DAFB" size={40} />,
    GitHub: <FaGithub color="#181717" size={40} />, // GitHub
    Vue: <FaVuejs color="#42b883" size={40} />, // Vue.js
    "C#": <img src={csharp} alt="C#" width={40} height={40} />,
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Work Experience Section */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyIcon}>
                {skillIcons["Experience"]}
              </div>
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        {/* Skills Section */}
        <div className={styles.skillsRow}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                {skillIcons[skill.title]}
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
