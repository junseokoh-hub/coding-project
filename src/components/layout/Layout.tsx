import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={styles.layout}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
