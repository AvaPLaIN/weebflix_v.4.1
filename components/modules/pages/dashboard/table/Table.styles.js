import styled from "styled-components";

export const Styles = styled.div`
  padding: 1rem;
  color: var(--color-light-grey);

  table {
    border-spacing: 0;

    thead {
      tr {
        height: 3rem;
        color: var(--color-white);

        &:nth-child(2) {
          height: 8rem;
          font-size: 1.4rem;

          th {
            min-width: 4rem;

            div:nth-child(2) {
              margin-top: 0.5rem;
            }
          }
        }
      }
    }

    tbody {
      tr {
        height: 4rem;
        cursor: pointer;

        &:hover {
        }
      }
    }

    tr {
      background-color: var(--color-black);
      color: var(--color-white);

      &:nth-child(2n + 1) {
        background-color: var(--color-grey);
        color: var(--color-black);
      }

      &:last-child {
        td {
        }
      }
    }

    th,
    td {
      :last-child {
      }
    }

    td {
      input {
        color: white;
        padding: 0.5rem 2rem;
        background-color: transparent;
        border: none;
      }

      &:first-child {
        text-align: center;
      }
    }
  }
`;
