import React, { useState } from "react";
import { SidebarContainer } from "./DashboardSidebar.styles";
import { BiArrowToLeft, BiArrowToRight, BiPlus } from "react-icons/bi";
import sidebarConfig from "./data/sidebar-config";
import NavItem from "./components/nav-item";

const DashboardSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSetSidebarIsOpen = () => {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  };

  const sidebarClassnames = isSidebarOpen ? "open" : "closed";

  return (
    <SidebarContainer className={sidebarClassnames}>
      <div className="sidebar-header-container">
        <div className="header">
          <h1>Dashboard</h1>
          <div className="toggle" onClick={handleSetSidebarIsOpen}>
            {isSidebarOpen ? (
              <BiArrowToLeft className="toggle-sidebar-button" />
            ) : (
              <BiArrowToRight className="toggle-sidebar-button" />
            )}
          </div>
        </div>
        <div className="create-container">
          <div className="create-wrapper">
            <BiPlus className="create-icon" />
            <p>Create</p>
          </div>
        </div>
      </div>
      <nav>
        <ul className="nav-list">
          {sidebarConfig.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </ul>
      </nav>
    </SidebarContainer>
  );
};

export default DashboardSidebar;
