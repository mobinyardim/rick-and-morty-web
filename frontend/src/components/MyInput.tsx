import { Input, InputProps } from "@material-tailwind/react";
import React from "react";

export function MyInput({ className, ...rest }: Omit<InputProps, "ref">) {
  return <Input {...rest} className={`font-sans font-thin ${className}`} />;
}