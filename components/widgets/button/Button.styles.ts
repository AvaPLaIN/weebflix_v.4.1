import styled, { css } from "styled-components";
import { IButton, Size, Variant } from "./Button.types";

//! SIZES
const small = css`
  font-size: 0.8em;
  padding: 0.4em 0.8em;
`;
const medium = css`
  font-size: 1em;
  padding: 0.5em 1em;
`;
const large = css`
  font-size: 1.2em;
  padding: 0.6em 1.2em;
`;
const size = ({ size }: { size?: Size }) => {
  if (size === "small") return small;
  if (size === "medium") return medium;
  if (size === "large") return large;
};

//! VARIANTS
const text = css`
  background-color: transparent;
  border: none;
`;
const contained = css`
  background-color: ${({ color }: { color?: string }) =>
    color || "currentColor"};
  border: none;
`;
const outlined = css`
  background-color: transparent;
  border: 1px solid
    ${({ color }: { color?: string }) => color || "currentColor"};
`;
const variant = ({ variant }: { variant?: Variant }) => {
  if (variant === "text") return text;
  if (variant === "contained") return contained;
  if (variant === "outlined") return outlined;
};

export const ButtonContainer = styled.button<IButton>`
  border-radius: 0.3rem;
  transition: transform 0.2s ease-in;
  cursor: pointer;
  //* Dynamic Styles
  ${size}
  ${variant}
  //* Hover Animation
  &:hover {
    transform: scale(1.05);
  }
`;
