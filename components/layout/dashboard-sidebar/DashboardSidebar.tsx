import React, { useState } from "react";
import { SidebarContainer } from "./DashboardSidebar.styles";
import { BiArrowToLeft, BiArrowToRight, BiPlus } from "react-icons/bi";
import sidebarConfig from "./data/sidebar-config";
import NavItem from "./components/nav-item";
import Form from "../../modules/pages/dashboard/form";
import formConfig from "../../../data/dashboard-create-form-config";
import FormBuilder from "../../packages/formbuilder";

const DashboardSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);

  const handleSetSidebarIsOpen = () => {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  };

  const handleSetCreateFormOpen = () => {
    setIsCreateFormOpen((isCreateFormOpen) => !isCreateFormOpen);
  };

  const handleSubmitForm = (data: any) => {
    console.log(data);
    // TODO add config to database
    // setIsCreateFormOpen(false);
    // TODO clear form
  };

  const sidebarClassnames = isSidebarOpen ? "open" : "closed";

  return (
    <>
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
            <div className="create-wrapper" onClick={handleSetCreateFormOpen}>
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
      {isCreateFormOpen && (
        <FormBuilder
          form={formConfig.form}
          template={formConfig.template}
          callback={handleSubmitForm}
        />
      )}
    </>
  );
};

export default DashboardSidebar;
