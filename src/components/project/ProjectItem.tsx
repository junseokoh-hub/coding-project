import styles from "./ProjectItem.module.css";

interface ProjectItemType {
  src: string;
  title: string;
  description: string;
  skills: {
    frontend: string[];
    database?: string[];
  };
  github: string;
  notion: string;
}

interface ProjectItemProps {
  project: ProjectItemType;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <li className={styles.project__item}>
      <div>
        <img
          className={styles.project__img}
          src={project.src}
          alt={project.title}
        />
      </div>
      <ul className={styles.project__information}>
        <li>
          <h2>{project.title}</h2>
        </li>
        <li>
          <p>{project.description}</p>
        </li>
        <li>
          <h3>Skills</h3>
          <div className={styles.project__skills__container}>
            <dl className={styles.project__skills}>
              <dt className={styles.project__skills__title}>Frontend</dt>
              {project.skills.frontend.map((front) => (
                <dd className={styles.project__skills__content} key={front}>
                  {front}
                </dd>
              ))}
            </dl>
            {project.skills.database ? (
              <dl className={styles.project__skills}>
                <dt className={styles.project__skills__title}>Database</dt>
                {project.skills.database.map((data) => (
                  <dd className={styles.project__skills__content} key={data}>
                    {data}
                  </dd>
                ))}
              </dl>
            ) : null}
          </div>
        </li>
        <li>
          <p>깃허브 링크</p>
          <a
            className={styles.project__links}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;{project.github}
          </a>
        </li>
        <li>
          <p>노션 링크</p>
          <a
            className={styles.project__links}
            href={project.notion}
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;{project.notion}
          </a>
        </li>
      </ul>
    </li>
  );
};

export default ProjectItem;
