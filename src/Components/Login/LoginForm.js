import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import btnStyles from "../Form/Button.module.css"

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h2 className="title">Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" label="E-mail" name="username" {...username} />
        <Input type="password" label="Senha" name="password" {...password} />
        <Error error={error} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">Perdeu a Senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={btnStyles.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
