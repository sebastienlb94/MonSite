// components/Footer.js
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Lien vers ton profil LinkedIn */}
        <a
          href="https://www.linkedin.com/in/s%C3%A9bastien-soto-766648183/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedinLink}
        >
          <img
            src="/linkedin-logo.png"
            alt="LinkedIn"
            className={styles.logo}
          />
        </a>

        {/* Informations de contact */}
        <div className={styles.contact}>
          <p>Email : sebastiensotofr@gmail.com</p>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} Sébastien Soto. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
