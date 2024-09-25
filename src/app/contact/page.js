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
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Prénom"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Nom"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Objet"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Message"
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
