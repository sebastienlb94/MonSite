import Link from "next/link";
import styles from "./menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons"; // Import de l'icône de téléchargement

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <h1>Sébastien SOTO</h1>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/about">À propos</Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/soto_visual/">Photos</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.cvIcon}>
          <a
            href="/CV-Sebastien-Soto.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Télécharger mon CV"
          >
            <FontAwesomeIcon icon={faDownload} className={styles.icon} />
            <span className={styles.cvText}>Mon CV</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
