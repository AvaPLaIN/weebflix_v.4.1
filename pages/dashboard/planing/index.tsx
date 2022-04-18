import React from "react";
import Header from "../../../components/layout/Head";
import DashboardSidebar from "../../../components/layout/dashboard-sidebar";
import styles from "../../../styles/dashboard.module.css";
import { useSession } from "next-auth/react";
import { dbConnect } from "../../../lib/mongodb";
import PlaningAnime from "../../../models/anime/PlaningAnime";

const PlaningPage = ({ animes }: any) => {
  const { data } = useSession();

  return (
    <div className={styles.layout}>
      <Header title="Weebflix - Dashboard" />
      <DashboardSidebar />
      <div className="content-container">
        <h1>
          Welcome <span>{data?.user?.name}</span> to Weebflix Dashboard Planing
        </h1>
        <pre>{JSON.stringify(animes, undefined, 2)}</pre>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  await dbConnect();
  const animes = await PlaningAnime.find({}, { episodes: 0 });

  const transform = {
    animes: JSON.parse(JSON.stringify(animes)),
  };
  return {
    props: {
      animes: transform.animes,
    },
  };
}

export default PlaningPage;
