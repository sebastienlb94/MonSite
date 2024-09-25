import React from "react";
import Menu from "../components/menu";
import Footer from "../components/footer";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.pageContainer}>
      <Menu />
      <div className={styles.aboutContainer}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src="/profile.jpg"
              alt="Photo de Sébastien"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.textContainer}>
            <h1>À propos de moi</h1>
            <p>
              Avant d'être Product Owner dans l'IT, je suis quelqu'un de
              passionné. J'aime comprendre le monde qui m'entoure, apprendre
              constamment et transmettre.
              <br />
              Cette curiosité naturelle me pousse à explorer des sujets qui me
              fascinent, comme l'intelligence artificielle, la gestion de la
              data et l'automatisation. Pour moi, ces technologies ne sont pas
              seulement des outils, mais des leviers pour améliorer notre
              quotidien. <br />
              Au fil de mon parcours, j'ai appris à tirer parti de la puissance
              des données pour guider des décisions stratégiques et à utiliser
              l'automatisation pour simplifier les processus. Mon expérience
              antérieure en tant que développeur m’a permis d’acquérir une
              vision technique approfondie, enrichissant ma perspective
              stratégique en tant que Product Owner. Ce mélange unique de
              compétences techniques et de vision stratégique me permet de
              concevoir des solutions robustes et adaptées aux besoins des
              utilisateurs.
              <br />
              Ce que j'apprécie tout autant, c’est la gestion humaine des
              équipes. Je prends à cœur de progresser avec les personnes avec
              lesquelles je travaille, de les accompagner et de les inspirer
              pour relever ensembles des défis. <br />
              J'aime le challenge de partir de zéro et de reconstruire, en
              transformant des idées en solutions concrètes et efficaces. C'est
              cette dynamique de croissance et d'innovation qui me motive au
              quotidien.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
