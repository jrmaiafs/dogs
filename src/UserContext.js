import React from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";

export const UserContext = React.createContext();

export const UserStored = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate()

  const getUser = React.useCallback(async function(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    navigate('/conta');
  }, [navigate])

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          console.log(response)
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (err) {
          getLogout();
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [getUser]);

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: Login Inválido`)
      const { token } = await response.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
    } catch (err) {
      setError(err.message)
      setLogin(null);
    } finally {
      setLoading(false);
    }
  }

  function getLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(null);
    window.localStorage.removeItem("token");
  }

  return (
    <UserContext.Provider value={{ userLogin, data, getLogout, loading, error, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStored;
