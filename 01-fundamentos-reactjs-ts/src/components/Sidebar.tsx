import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://tm.ibxk.com.br/2021/08/10/10181814794027.jpg?ims=500x80"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/caioscatolino.png" />
        <strong>Caio Scatolino</strong>
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
