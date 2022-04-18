import styled from "styled-components";

export const ControlsContainer = styled.div`
  display: flex;

  .start {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h2 {
      font-size: 1.5rem;
      color: var(--color-light-grey);
    }

    button {
      padding: 0.5rem;
      cursor: pointer;
    }
  }
`;
