import React from "react";
import { STATS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    function getData() {
      const token = window.localStorage.getItem("token");
      const { url, options } = STATS_GET(token);
      request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head
          title="Estatísticas"
          description="Lugar onde você pode ver suas estastísticas de uso deste site"
        />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
