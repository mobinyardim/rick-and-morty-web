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
  const { className, children, isLoading, ...rest } = props;
  return (
    <Button
      {...rest}
      className={` font-sans normal-case ${
        isLoading ? "text-transparent" : ""
      } ${className}`}
      ref={ref}
    >
      {children}
      {isLoading && (
        <CircularLoading
          className={
            "absolute bottom-[50%] right-[50%] h-6  w-6 translate-y-2/4 translate-x-2/4 content-center items-center"
          }
        />
      )}
    </Button>
  );
});

// {isLoading ? <CircularLoading className={"h-4 w-4"} /> : children}
