import styled from "styled-components";

export const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;

    thead {
      tr {
        height: 3rem;
        color: var(--color-bright-2);

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
      background-color: var(--color-dark-1);

      &:nth-child(2n + 1) {
        background-color: var(--color-dark-3);
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
      color: var(--color-bright-2);

      input {
        padding: 0.5rem 2rem;
        background-color: transparent;
        border: none;
        color: var(--color-bright-2);
      }

      &:first-child {
        text-align: center;
      }
    }
  }
`;
