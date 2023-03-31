import { PencilLine } from "phosphor-react";

import userCover from "../assets/user-cover.png";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={userCover} />

      <div className={styles.profile}>
        <Avatar src="https://github.com/marcelopajr.png" />

        <strong>Marcelo Pereira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
