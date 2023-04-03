import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Toolbar from "@/components/Toolbar";

const inter = Inter({ subsets: ["latin"] });

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
