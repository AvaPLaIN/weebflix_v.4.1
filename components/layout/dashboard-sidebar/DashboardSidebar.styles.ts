import styled from "styled-components";
import { NavItemOnCloseSidebar } from "./components/nav-item/NavItem.styles";

export const SidebarContainer = styled.div`
  position: sticky;
  transition: all 0.4s ease-in-out;
  left: 0;
  top: 0;
  height: 100vh;
  width: 20rem;
  background-color: var(--color-black);
  border-top-right-radius: 2rem;
  color: white; //TODO adjust color
  display: flex;
  flex-direction: column;

  .sidebar-header-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .header {
      align-self: flex-end;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      h1 {
        color: var(--color-light-grey);
        font-size: 2.2rem;
      }

      .toggle {
        min-width: 6.5rem;
        height: 6.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .toggle-sidebar-button {
          font-size: 3rem;
          color: var(--color-light-grey);
          transition: all 0.3s ease-in-out;

          &:hover {
            color: var(--color-white);
          }
        }
      }
    }

    .create-container {
      height: 5rem;
      width: 100%;
      padding: 0 1rem;

      .create-wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        border-radius: 0.5rem;
        background-color: var(--color-dark);
        color: var(--color-light-grey);
        cursor: pointer;

        .create-icon {
          font-size: 2.4rem;
          transition: all 0.3s ease-in-out;
          color: var(--color-light-grey);
        }

        p {
          margin-top: 0.1rem;
          font-size: 1.6rem;
          transition: all 0.3s ease-in-out;
          white-space: nowrap;
          color: var(--color-light-grey);
        }

        &:hover {
          background-color: var(--color-light-dark);

          .create-icon {
            color: var(--color-white);
          }

          p {
            color: var(--color-white);
          }
        }
      }
    }
  }

  nav {
    ul {
      list-style: none;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 3rem;
    }
  }

  &.closed {
    width: 6.5rem;

    .sidebar-header-container {
      .header {
        h1 {
          display: none;
        }
      }

      .create-container {
        .create-wrapper {
          gap: 0rem;

          p {
            opacity: 0;
            font-size: 0rem;
          }
        }
      }
    }

    .nav-list {
      & > div {
        ${NavItemOnCloseSidebar}
      }
    }
  }
`;
