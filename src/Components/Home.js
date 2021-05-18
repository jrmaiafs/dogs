import React from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed/Feed";
import Head from "./Helper/Head";
import styles from "./Home.module.css";
import ButtonStyle from "../Components/Form/Button.module.css";
import { UserContext } from "../UserContext";

const Home = () => {
  const { login } = React.useContext(UserContext);
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Rede social para animais" />
      <div className={login ? styles.homeLogado : styles.home}>
        {!login && (
          <div className={styles.description}>
            <h1>Uma rede social para animais</h1>
            <div className={styles.intro}>
              <p>Publique Fotos</p>
              <p>Curta e Comente</p>
            </div>
            <div className={styles.cadastro}>
              <h2>Cadastre-se gratuitamente</h2>
              <Link className={ButtonStyle.button} to="login/criar">
                Cadastro
              </Link>
            </div>
            <div className={styles.login}>
              <p>Ou faça login se já possui uma conta</p>

              <Link className={ButtonStyle.button} to="login">
                Login
              </Link>
            </div>
          </div>
        )}

        <div>
          {!login && (
            <div className={styles.espiada}>
              <p>Dê uma espiada nas fotos dos usuários</p>
            </div>
          )}
          <Feed />
        </div>
      </div>
    </section>
  );
};

export default Home;
