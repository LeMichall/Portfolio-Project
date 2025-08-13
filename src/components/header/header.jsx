import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => (
  <nav className={styles.nav}>
    <h1 className={styles.logo}>Moje Portfolio</h1>
    <ul className={styles.navList}>
      <li>
        <Link to="/" className={styles.link}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className={styles.link}>
          About
        </Link>
      </li>
      <li>
        <Link to="/projects" className={styles.link}>
          Projects
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
