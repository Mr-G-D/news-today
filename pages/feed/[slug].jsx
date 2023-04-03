import Toolbar from "@/components/Toolbar";
import styles from "@/styles/Feed.module.css";
import { useRouter } from "next/router";

const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        {articles.map((article, index) => (
          <div key={index} className={styles.post}>
            <h1 onClick={() => (window.location.href = article.url)}>
              {article.title}
            </h1>
            <p>{article.description}</p>
            {!!article.urlToImage && (
              <img src={article.urlToImage} alt="image" />
            )}
          </div>
        ))}
      </div>

      <div className={styles.paginator}>
        <div
          className={pageNumber == 1 ? styles.disabled : styles.active}
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/feed/${pageNumber - 1}`);
            }
          }}
        >
          {" "}
          Previous{" "}
        </div>
        <div># {pageNumber}</div>
        <div
          className={pageNumber == 5 ? styles.disabled : styles.active}
          onClick={() => {
            if (pageNumber < 5) {
              router.push(`/feed/${pageNumber + 1}`);
            }
          }}
        >
          {" "}
          Next{" "}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (PageContext) => {
  const pageNumber = parseInt(PageContext.query.slug);
  console.log(typeof pageNumber);
  if (!pageNumber || pageNumber < 1) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `${process.env.NEWS_API_KEY}`,
      },
    },
  );
  const json = await res.json();
  const { articles } = json;
  return {
    props: {
      articles,
      pageNumber,
    },
  };
};

export default Feed;
