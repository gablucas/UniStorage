import { Outlet } from "react-router-dom";
import Styles from './Container.module.css';
import Sidebar from "../Sidebar";

const Container = () => {

  return (
    <section className={Styles.container}>
      <Sidebar />
      <Outlet />
    </section>
  )
}

export default Container;