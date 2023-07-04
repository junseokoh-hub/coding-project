import styles from "./App.module.css";

const colors = [
  "white",
  "purple",
  "black",
  "purple",
  "blue",
  "green",
  "aqua",
  "red",
  "white",
  "white",
  "black",
  "yellow",
];

const App = () => {
  return (
    <main className={styles.main}>
      <ul className={styles.ul}>
        {Array.from({ length: 12 }).map((_, i) => (
          <li
            key={i}
            style={{ backgroundColor: colors[i] }}
            className={`${styles[colors[i] + i]}`}
          />
        ))}
      </ul>
    </main>
  );
};

export default App;
