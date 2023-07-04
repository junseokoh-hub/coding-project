import ProjectList from "../components/project/ProjectList";
import { useTitle } from "../hooks/useTitle";
import styles from "./Project.module.css";

const Project = () => {
  useTitle("Project");
  return (
    <section className={styles.project}>
      <ProjectList />
    </section>
  );
};

export default Project;
