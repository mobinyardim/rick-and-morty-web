import React from "react";
import { Alert, AlertProps } from "@material-tailwind/react";
import { AlertStylesType } from "@material-tailwind/react/theme/components/alert";

export const alertStylesType: AlertStylesType = {
  valid: {
    variants: ["error"],
  },
  styles: {
    variants: {
      filled: {
        error: {
          background: "bg-error",
          color: "text-onError",
        },
      },
      gradient: {
        error: {
          background: "bg-error",
          color: "text-onError",
        },
      },
    },
  },
};

interface MyAlertProps extends Omit<AlertProps, "color"> {
  color?: "success" | "error" | "warning" | "primary";
}

export const MyAlert = React.forwardRef<HTMLDivElement, MyAlertProps>(
  (props, ref) => {
    const { className, children, ...rest } = props;
    return (
      <Alert
        {...(rest as any)}
        className={`font-sans normal-case  ${className}`}
        ref={ref}
      >
        {children}
      </Alert>
    );
  }
);
