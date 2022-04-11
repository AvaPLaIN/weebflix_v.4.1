import { memo } from "react";
import { ButtonContainer } from "./Button.styles";
import { IButton } from "./Button.types";

const Button = ({
  children,
  variant = "contained",
  disabled = false,
  size = "medium",
  ...props
}: IButton) => {
  return (
    <ButtonContainer
      role="button"
      disabled={disabled}
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};

export default memo(Button);
