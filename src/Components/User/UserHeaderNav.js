import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./UserHeaderNav.module.css";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Adicionarfoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [menuMobile, setMenuMobile] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMenuMobile(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu-mobile"
          onClick={() => setMenuMobile(!menuMobile)}
          className={`${styles.mobileButton} ${
            menuMobile && styles.mobileButtonActive
          }`}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          menuMobile && styles.navMobileActive
        }`}
      >
        <NavLink activeClassName={styles.active} to="/conta" end>
          <MinhasFotos />
          {mobile && "Minha Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName={styles.active}>
          <Adicionarfoto />
          {mobile && " Acicionar Fotos"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && " Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
