import React from "react";
import Header from "../../../components/layout/Head";
import DashboardSidebar from "../../../components/layout/dashboard-sidebar";
import styles from "../../../styles/dashboard.module.css";
import { useSession } from "next-auth/react";
import { dbConnect } from "../../../lib/mongodb";
import AiringAnime from "../../../models/anime/AiringAnime";
import Table from "../../../components/modules/pages/dashboard/table";
import Controls from "../../../components/modules/pages/dashboard/controls";

const AiringPage = ({ animes }: any) => {
  const { data } = useSession();

  return (
    <div className={styles.layout}>
      <Header title="Weebflix - Dashboard" />
      <DashboardSidebar />
      <div className={styles.contentContainer}>
        <h1>
          Welcome <span className="username">{data?.user?.name}</span> to
          Weebflix Dashboard Airing
        </h1>
        <Controls />
        <Table entries={animes} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  await dbConnect();
  const animes = await AiringAnime.find({}, { episodes: 0 });

  const transform = {
    animes: JSON.parse(JSON.stringify(animes)),
  };
  return {
    props: {
      animes: transform.animes,
    },
  };
}

export default AiringPage;
