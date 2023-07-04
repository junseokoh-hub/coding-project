import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Project",
    path: "/project",
  },
];

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav />
      <nav>
        <ul className={styles.link__container}>
          {links.map((link) => (
            <li key={link.label}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
