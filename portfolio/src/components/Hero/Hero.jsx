import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import profileImage from "../../assets/hero/profile.jpeg";
// import profileImage from "../../assets/hero/profilepic.jpeg";
import resumePdf from "../../assets/hero/Mmathabo M Resume 2025  (4).pdf";

export const Hero = () => {
  const [role, setRole] = useState("Software Developer");

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  // Role animation logic
  useEffect(() => {
    const roles = [
      "Software Developer",
      "Web Developer",
      "Frontend Developer",
      "Backend Developer",
    ];
    let currentIndex = 0;

    const interval = setInterval(
      () => {
        currentIndex = (currentIndex + 1) % roles.length;
        setRole(roles[currentIndex]);
      },
      currentIndex === 0 ? 4000 : 5000
    ); // 4s for the first role, 5s for the rest

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I'm Mmathabo Mphahlele
        </motion.h1>
        <motion.p
          className={styles.description}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
        >
          A{" "}
          <motion.span
            key={role}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #6a11cb, #2575fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              fontSize: "24px", /* Reduced font size for mobile */
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            {role}
          </motion.span>
        </motion.p>
        <motion.div
          className={styles.buttonContainer}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a
            href={resumePdf} // Use the imported PDF file
            download="Mmathabo_Mphahlele_Resume.pdf"
            className={styles.resumeBtn}
          >
            View My Resume
          </a>
        </motion.div>
      </div>
      <motion.img
        src={profileImage}
        alt="Profile"
        className={styles.heroImg}
        variants={slideInRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className={styles.topBlur}
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className={styles.bottomBlur}
        variants={slideInRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
};