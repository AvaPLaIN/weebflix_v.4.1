import React from "react";
import Header from "../../components/layout/Head";
import DashboardSidebar from "../../components/layout/dashboard-sidebar";
import styles from "../../styles/dashboard.module.css";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data } = useSession();

  return (
    <div className={styles.layout}>
      <Header title="Weebflix - Dashboard" />
      <DashboardSidebar />
      <h1>
        Welcome <span>{data?.user?.name}</span> to Weebflix Dashboard Homepage
      </h1>
    </div>
  );
};

export default Dashboard;