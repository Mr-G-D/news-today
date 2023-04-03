import styles from "@/styles/Home.module.css";
import Toolbar from "@/components/Toolbar";

export default function Home() {
  return (
    <div
      className="page-container"
      style={{
        height: "100vh",
      }}
    >
      <Toolbar />
      <div className={styles.main}>
        <h1>News Today</h1>

        <h3>Your one stop shop for latest news articles</h3>
      </div>
    </div>
  );
}
