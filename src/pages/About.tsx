import { useTitle } from "../hooks/useTitle";
import styles from "./About.module.css";

const information = [
  {
    title: "이름",
    content: "오준석",
  },
  {
    title: "생년월일",
    content: "1996.03.15",
  },
  {
    title: "이메일",
    content: "junseokoh315@gmail.com",
  },
  {
    title: "연락처",
    content: "010-4323-3216",
  },
  {
    title: "깃허브",
    content: "010-4323-3216",
  },
];

const skills = [
  {
    label: "HTML/CSS",
    desc: [
      "웹표준에 맞는 태그와 시맨틱 태그를 사용하여 만들 수 있습니다.",
      "웹 표준에 맞게 스타일과 레이아웃을 적용할 수 있으며 BEM 방법론으로 선택자를 구성할 수 있습니다.",
    ],
  },
  {
    label: "JavaScript",
    desc: [
      "async/await와 fetch API를 이용하여 데이터를 받아올 수 있습니다.",
      "ES6 이후의 문법들을 적용할 수 있으며 더욱 공부하고 있습니다.",
    ],
  },
  {
    label: "React",
    desc: [
      "Functional Component를 기반으로 LifeCycle을 이해하고 React Hooks로 이를 표현할 수 있습니다.",
      "useCallback과 React.memo를 이용한 메모이제이션 적용하여 최적화를 적용할 수 있습니다.",
    ],
  },
  {
    label: "React-Redux (Redux-Toolkit)",
    desc: ["기본적인 함수들로 데이터를 전역적으로 관리할 수 있습니다."],
  },
  {
    label: "Tanstack Query",
    desc: [
      "서버 쪽 데이터를 비동기적으로 Fetching 할 수 있습니다.",
      "useMutation을 이용해 생성, 수정, 삭제 동작을 실행할 수 있습니다.",
    ],
  },
];

const About = () => {
  useTitle("About");
  return (
    <section className={styles.about}>
      <article>
        <div>
          <img
            className={styles.my__img}
            src={"/images/m.jpg"}
            alt={"my__image"}
            loading="lazy"
          />
        </div>
        <ul className={styles.information__container}>
          {information.map((info) => (
            <li key={info.title} className={styles.information__list}>
              <strong>{info.title}</strong>
              <span>{info.content}</span>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <ul className={styles.skills__container}>
          {skills.map((skill) => (
            <li>
              <h3>{skill.label}</h3>
              <ul>
                {skill.desc.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default About;
