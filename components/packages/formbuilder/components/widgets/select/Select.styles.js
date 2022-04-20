import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  color: white;
  gap: 1rem;

  .label {
    min-width: 125px;
    text-align: right;
  }

  .control {
    width: 100%;
    background-color: var(--color-black);
    border: none;
    border-bottom: 1px solid var(--color-grey);
    color: var(--color-white);
  }

  .error {
    white-space: nowrap;
    color: red;
  }
`;
