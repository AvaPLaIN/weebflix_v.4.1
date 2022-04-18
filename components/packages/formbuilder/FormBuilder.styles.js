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

    .submit-button {
      padding: 1rem;
    }
  }
`;

export const StateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
