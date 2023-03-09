import { Input, InputProps } from "@material-tailwind/react";
import React from "react";

export const MyInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <Input
        {...rest}
        className={`font-sans font-thin ${className}`}
        ref={ref}
      />
    );
  }
);
