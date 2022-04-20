import styled from "styled-components";

export const FormBuilderContainer = styled.div`
  position: absolute;
  width: clamp(400px, 50%, 700px);
  height: max-content;
  background-color: var(--color-black);
  border: 3px solid var(--color-grey);
  border-radius: 2rem;
  padding: 2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .formbuilder {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .controls {
      margin-top: 2rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .submit-button {
        padding: 1rem;
        background-color: green;
        border: none;
        color: var(--color-black);
        font-size: 1.6rem;
        font-weight: 800;
        cursor: pointer;
      }

      .clear-button {
        padding: 1rem;
        background-color: red;
        border: none;
        color: var(--color-black);
        font-size: 1.2rem;
        font-weight: 800;
        cursor: pointer;
      }
    }
  }
`;
