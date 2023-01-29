import { Button, ButtonProps } from "@material-tailwind/react";
import React from "react";

export function MyButton({ className, ...rest }: Omit<ButtonProps, "ref">) {
  return <Button {...rest} className={`font-sans normal-case ${className}`} />;
}
