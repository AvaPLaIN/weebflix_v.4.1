import styled from "styled-components";

export const ProfileMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  color: var(--color-white);
  display: none;
  background-color: var(--color-dark);
  padding: 1rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  z-index: 999;
  ul {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    li {
      font-size: 1.6rem;
      padding: 1rem;
      &:hover {
        color: rgba(0, 0, 0, 0.6);
        background-color: transparent;
      }
    }
  }
`;
