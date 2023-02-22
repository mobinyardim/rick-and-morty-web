import React, { createContext, useEffect, useState } from "react";
import { Alert, AlertProps } from "@material-tailwind/react";
import { AlertStylesType } from "@material-tailwind/react/theme/components/alert";

export const alertStylesType: AlertStylesType = {
  valid: {
    variants: ["gradient", "filled"],
    colors: ["error", "success", "warning", "primary"],
  },
  styles: {
    variants: {
      filled: {
        error: {
          background: "bg-error",
          color: "text-onError",
        },
        success: {
          background: "bg-success",
          color: "text-onSuccess",
        },
        warning: {
          background: "bg-warning",
          color: "text-onWarning",
        },
        primary: {
          background: "bg-primary",
          color: "text-onPrimary",
        },
      },
      gradient: {
        error: {
          background: "bg-error",
          color: "text-onError",
        },
        success: {
          background: "bg-success",
          color: "text-onSuccess",
        },
        warning: {
          background: "bg-warning",
          color: "bg-onWarning",
        },
        primary: {
          background: "bg-primary",
          color: "text-onPrimary",
        },
      },
    },
  },
};

type AlertType = "error" | "success" | "warning" | "primary";
interface MyAlertProps extends Omit<AlertProps, "color"> {
  color?: AlertType;
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

interface MyAlertContextProps {
  isVisible: boolean;
  message: string;
  showAlert: (message: string, type: AlertType) => void;
  type: AlertType;
}

export function useAlert(timout: number = 2000): MyAlertContextProps {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<AlertType>("success");

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
    showAlert: (message, type) => {
      setMessage(message);
      setType(type);
      setVisible(true);
    },
    type: type,
  };
}

export const MyAlertContext = createContext<MyAlertContextProps>({
  isVisible: false,
  message: "",
  showAlert: () => {},
  type: "success",
});
