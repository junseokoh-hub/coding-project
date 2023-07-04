import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import { useTitle } from "../hooks/useTitle";

const NotFound = () => {
  useTitle("Not Found");
  return (
    <main className={styles.notfound}>
      <h1>NotFound!</h1>
      <Link to="/">메인으로 되돌아가기</Link>
    </main>
  );
};

export default NotFound;
