import React, { useState, useRef } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS service ID, template ID, and public key
    emailjs
      .sendForm(
        "service_wqzg1mx", // Replace with your EmailJS Service ID
        "template_jmhyqre", // Replace with your EmailJS Template ID
        form.current,
        "sJMDMboB_ew6UlgdL" // Replace with your EmailJS Public Key
      )

      .then((result) => {
        console.log("Email sent successfully:", result.text);
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text);
        alert(
          "Sorry, there was a problem sending your message. Please try again later."
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.formSection}>
        <h2 className={styles.title}>
          Contact <span className={styles.highlight}>Me</span>
        </h2>

        <form ref={form} className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className={styles.infoSection}>
        <p className={styles.infoText}>
          I’m always open to discussing new projects, collaborations, or any
          inquiries. Feel free to reach out—let’s connect and create something
          amazing!
        </p>

        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <FaPhone />
            </div>
            <p>076 325 324</p>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <FaEnvelope />
            </div>
            <p>mmathabom99@gmail.com</p>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <FaMapMarkerAlt />
            </div>
            <p>Johannesburg, South Africa</p>
          </div>

          {/* LinkedIn Account Link */}
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <FaLinkedin />
            </div>
            <a
              href="www.linkedin.com/in/mmathabo-mphahlele-986836283"
              target="_blank"
              rel="noopener noreferrer"
              color="white"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* GitHub Account Link */}
          {/* <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <FaGithub />
            </div>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub Profile
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};
