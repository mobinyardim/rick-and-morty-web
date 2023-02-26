import { Button, ButtonProps } from "@material-tailwind/react";
import React from "react";
import { CircularLoading } from "./circularIndeterminate/CircularLoading";

interface MyButtonProps {
  isLoading?: boolean;
}

export const MyButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & MyButtonProps
>((props, ref) => {
  const { className, children, isLoading, fullWidth, ...rest } = props;
  return (
    <div className={`${fullWidth ? "block" : "inline"} relative`}>
      <Button
        {...rest}
        fullWidth={fullWidth}
        className={`font-sans normal-case  ${
          isLoading ? "text-transparent" : ""
        } ${className}`}
        ref={ref}
      >
        {children}
      </Button>
      {isLoading && (
        <CircularLoading
          className={
            "absolute bottom-[50%] right-[50%] z-10 h-6  w-6 translate-y-2/4 translate-x-2/4 content-center items-center"
          }
        />
      )}
    </div>
  );
});

// {isLoading ? <CircularLoading className={"h-4 w-4"} /> : children}
