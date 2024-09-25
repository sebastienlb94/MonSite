import styles from "./page.module.css";
import Menu from "./components/menu";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Menu />
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Bienvenue sur notre site</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
