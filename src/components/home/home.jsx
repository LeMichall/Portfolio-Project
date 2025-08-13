import styles from "./home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Cześć</h1>
      <p className={styles.text}>Jestem Michał, Junior React Developer</p>
      <Link to="/projects" className={styles.link}>
        Zobacz moje projekty
      </Link>
    </div>
  );
};
export default Home;
