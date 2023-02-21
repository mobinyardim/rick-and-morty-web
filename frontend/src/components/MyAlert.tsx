import React, { useEffect, useState } from "react";
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

export function useAlert(timout: number = 2000): {
  isVisible: boolean;
  message: string;
  show: (message: string) => void;
} {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (visible) {
      timer = setTimeout(() => {
        setVisible(false);
      }, timout);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timout, visible]);

  return {
    isVisible: visible,
    message: message,
    show: (message) => {
      setMessage(message);
      setVisible(true);
    },
  };
}
