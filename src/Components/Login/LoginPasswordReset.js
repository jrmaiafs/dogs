import React from "react";
import { useNavigate } from "react-router-dom";
import { PASSWORD_RESET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginPasswordReset = () => {
  const navigate = useNavigate();
  const login = useForm();
  const { error, loading, request } = useFetch();
  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const params = new URLSearchParams(window.location.search);
      const { url, options } = PASSWORD_RESET({
        key: params.get("key"),
        login: params.get("login"),
        password: login.value,
      });

      if (params.get("key")) {
        const { response } = await request(url, options);
        if (response.ok) navigate("/login");
      }
    }
  }
  return (
    <section>
      <Head title="Resetar senha" description="Rota para resetar a senha" />
      <h1 className="title">Resete sua senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="text" name="email" {...login} />
        {loading ? <Button>Resetando...</Button> : <Button>Resetar</Button>}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
