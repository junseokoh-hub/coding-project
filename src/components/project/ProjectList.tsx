import ProjectItem from "./ProjectItem";
import styles from "./ProjectList.module.css";

const projects = [
  {
    src: "/images/fakemoviedb.png",
    title: "fakemoviedb",
    description:
      "영화 상세 검색 및 좋아하는 영화를 표시하거나 리스트에 담을 수 있으며 다양한 영화에 대한 수많은 정보들을 얻을 수 있는 정보 웹사이트 입니다.",
    skills: {
      frontend: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "React Query",
        "Recoil",
        "Styled-Components",
      ],
    },
    github: "https://github.com/junseokoh-hub/react-movieApp",
    notion:
      "https://junseokoh.notion.site/FakeMovieDB-df2b4e674df84eb2a4921cb94ebfe62e",
  },
  {
    src: "/images/oddend.png",
    title: "oddend",
    description:
      "다양한 잡동사니 물품들을 판매하는 사이트 입니다. 사고 싶은 물건들을 카트에 담고 물건이나 사이트에 대한 의견을 낼 수 있습니다.",
    skills: {
      frontend: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "React Query",
        "Redux-Toolkit",
        "Styled-Components",
      ],
      database: ["Firestore", "CloudStorage"],
    },
    github: "https://github.com/junseokoh-hub/react-commerce",
    notion:
      "https://junseokoh.notion.site/OddEnd-abb66fad9d954c41a99fb2a0d02672ce",
  },
  {
    src: "/images/travelisty.png",
    title: "travelisty",
    description:
      "국내 여행에 대한 정보를 손쉽게 얻을 수 있으며 여행에 대한 자신의 의견을 공유할 수 있습니다. 또한 가고 싶은 여행지에 대한 정보를 얻고 이를 저장하고 계획을 세울 수 있는 여행 정보 웹사이트 입니다.",
    skills: {
      frontend: [
        "HTML/CSS",
        "TypeScript",
        "React",
        "React Query",
        "Redux-Toolkit",
        "TailwindCSS",
      ],
      database: ["Firestore", "CloudStorage"],
    },
    github: "https://github.com/junseokoh-hub/react-tourism",
    notion:
      "https://junseokoh.notion.site/Travelisty-d322611bc5be4d1496224e257b15146e",
  },
];

const ProjectList = () => {
  return (
    <ul className={styles.project__container}>
      {projects.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
