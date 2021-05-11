import React from "react";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";
import styles from "./UserConta.module.css";


const UserConta = () => {
  const { data: dados } = React.useContext(UserContext);
  const { data, error, loading, request } = useFetch();
  const [photos, setPhotos] = React.useState(null);
  React.useEffect(() => {
    const total = -1;
    const page = 1;
    const user = 8;

    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if(response.ok) {
        const acessos = json.map((foto) => Number(foto.accesses)).reduce((a, b) => a + b)
        const curtidas = json.map((foto) => Number(foto.curtidas)).reduce((a, b) => a + b)
        const fotos = json.length
        setPhotos({acessos, curtidas, fotos})
      }
    }
    fetchPhotos();

  }, [request, data]);
  console.log(photos)
  return (
    <div className={styles.main}>
      <div className={styles.dados}>
        <div className={styles.numeros}>
          <b>Nome:</b> <p>{dados && dados.name}</p>
        </div>
        <div className={styles.numeros}>
          <b>Email:</b> <p>{dados && dados.email}</p>
        </div>
        <div className={styles.numeros}>
          <b>Fotos:</b> <p>{photos && photos.fotos}</p>
        </div>
        <div className={styles.numeros}>
          <b>Curtidas: </b> <p>{photos && photos.curtidas}</p>
        </div>
        <div className={styles.numeros}>
          <b>Visualizações: </b> <p>{photos && photos.acessos}</p>
        </div>
      </div>
      <Feed user={dados.id} />
    </div>
  );
};

export default UserConta;
