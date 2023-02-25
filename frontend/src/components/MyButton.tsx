import { Button, ButtonProps } from "@material-tailwind/react";
import React from "react";

export const MyButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, children, ...rest } = props;
    return (
      <Button
        {...rest}
        className={`font-sans normal-case  ${className}`}
        ref={ref}
      >
        {children}
      </Button>
    );
  }
);
