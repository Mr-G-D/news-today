import { useRouter } from "next/router";
import styles from "@/styles/Toolbar.module.css";
import Head from "next/head";

const Toolbar = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <Head>
        <title>News Today</title>
        <link
          rel="icon"
          href="https://cdn.onlinewebfonts.com/svg/img_45428.png"
        />
      </Head>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>Feed</div>
      <div onClick={() => router.push("/eom")}>EOM</div>
      <div onClick={() => (window.location.href = "https://twitter.com/news")}>
        Twitter
      </div>
    </div>
  );
};

export default Toolbar;
