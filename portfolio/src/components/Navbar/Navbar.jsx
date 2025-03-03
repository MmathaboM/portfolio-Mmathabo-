import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(`.${styles.menu}`)) {
        setMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [menuOpen]);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "×" : "☰"}
      </button>
      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
        <ul className={styles.menuItems}>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
