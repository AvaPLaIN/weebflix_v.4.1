import styled from "styled-components";

export const NavbarContainer = styled.header`
  height: 7rem;
  .wrapper {
    height: 100%;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--color-orange);
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      cursor: pointer;
    }
  }
`;
