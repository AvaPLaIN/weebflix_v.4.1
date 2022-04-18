import React from "react";
import Header from "../../components/layout/Head";
import DashboardSidebar from "../../components/layout/dashboard-sidebar";
import styles from "../../styles/dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.layout}>
      <Header title="Weebflix - Dashboard" />
      <DashboardSidebar />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
