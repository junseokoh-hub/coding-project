import { useTitle } from "../hooks/useTitle";
import styles from "./Home.module.css";

const Home = () => {
  useTitle("Home");
  return (
    <section className={styles.home}>
      <h2>안녕하세요</h2>
      <h2>프론트엔드 개발자를 희망하는 오준석입니다.</h2>
    </section>
  );
};

export default Home;
