import { NavLink } from "react-router-dom";

import { Logo } from "@/shared/assets/images";

import * as styles from "./header.css";

export const Header = () => {
  return (
    <header className={styles.headerLayout}>
      <div className={styles.header}>
        <div className={styles.menus}>
          <NavLink to="/" aria-label="메인으로 이동">
            <img src={Logo} className={styles.logo} alt="로고" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};
