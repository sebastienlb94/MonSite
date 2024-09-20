// src/app/contact/page.js
import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import styles from "./contact.module.css"; // Les styles seront ici

const Contact = () => {
  return (
    <>
      <Menu />
      <div className={styles.contactContainer}>
        <div className={styles.formContainer}>
          <h1 className={styles.heading}>Contactez-moi</h1>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">Prénom</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Nom</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Objet</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
