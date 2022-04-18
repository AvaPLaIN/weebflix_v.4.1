import styled, { css } from "styled-components";

export const NavItemContainer = styled.div`
  width: 100%;
  cursor: pointer;

  .feature-item {
    height: 5rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .item-icon {
      min-width: 6.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease-in-out;
      font-size: 2rem;
      color: var(--color-light-grey);
    }

    .item-text {
      font-size: 1.4rem;
      font-weight: bold;
      transition: all 0.3s ease-in-out;
      color: var(--color-light-grey);
    }

    .item-tooltip {
      position: absolute;
      left: 105%;
      font-size: 1.2rem;
      background-color: var(--color-black);
      padding: 0.8rem;
      border-radius: 0.5rem;
      color: var(--color-white);
      transition: all 0.5s ease;
      transform: translateY(-50%);
      opacity: 0;
      pointer-events: none;
    }

    &.active {
      background-color: var(--color-dark);
    }
  }

  &:hover {
    background-color: var(--color-dark);

    .item-text {
      color: var(--color-white);
    }

    .item-icon {
      color: var(--color-white);
    }
  }
`;

export const NavItemOnCloseSidebar = css`
  .feature-item {
    .item-text {
      opacity: 0;
      font-size: 0rem;
    }
  }

  &:hover {
    .item-tooltip {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;
