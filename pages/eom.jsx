import Toolbar from "@/components/Toolbar";
import styles from "../styles/EOM.module.css";

const eom = ({ employee }) => {
  const data = employee.results[0];
  // console.log(data);
  return (
    <div
      className="page-container"
      style={{
        height: "100%",
      }}
    >
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the Month</h1>
        <div className={styles.employeeOfTheMonth}>
          <h2>{data.name.first + " " + data.name.last}</h2>
          <h4>{data.email}</h4>
          <img src={data.picture.large} alt="image" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            aut sunt! Praesentium quibusdam culpa voluptates a facere, quisquam
            ratione porro.
          </p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const data = await fetch("https://randomuser.me/api/");
  const employee = await data.json();
  return {
    props: {
      employee,
    },
  };
};

export default eom;
