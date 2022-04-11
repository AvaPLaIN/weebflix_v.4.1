import styled from "styled-components";

export const MenuContainer = styled.nav`
  height: 100%;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    li {
      height: 100%;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-white);
      font-size: 2.2rem;
      cursor: pointer;
      transition: all 0.1s;
      &:hover {
        color: var(--color-orange);
        background-color: rgba(0, 0, 0, 0.2);
      }
      &.profile {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        position: relative;
        &:hover {
          .profile-menu {
            display: block;
          }
        }
        .image {
          height: 4rem;
          width: 4rem;
          object-fit: cover;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
        }
      }
    }
  }
`;
