import React from "react";
import Header from "../../../components/layout/Head";
import DashboardSidebar from "../../../components/layout/dashboard-sidebar";
import styles from "../../../styles/dashboard.module.css";
import { useSession } from "next-auth/react";
import { dbConnect } from "../../../lib/mongodb";
import Anime from "../../../models/Anime";

const AllPage = ({ animes }: any) => {
  const { data } = useSession();

  return (
    <div className={styles.layout}>
      <Header title="Weebflix - Dashboard" />
      <DashboardSidebar />
      <div className="content-container">
        <h1>
          Welcome <span>{data?.user?.name}</span> to Weebflix Dashboard All
        </h1>
        <pre>{JSON.stringify(animes, undefined, 2)}</pre>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  await dbConnect();
  const animes = await Anime.find();

  const transform = {
    animes: JSON.parse(JSON.stringify(animes)),
  };
  return {
    props: {
      animes: transform.animes,
    },
  };
}

export default AllPage;
