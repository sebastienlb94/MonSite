import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Bienvenue sur notre site</h1>
      </div>
    </div>
  );
}
