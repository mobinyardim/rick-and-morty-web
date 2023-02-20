import AuthBannerComponent from "../componenets/AuthBannerComponent";
import { MyInput } from "../../../components/MyInput";
import { MyButton } from "../../../components/MyButton";
import { useForm } from "react-hook-form";
import { LoginBody } from "models/src/bodyModels/LoginBody";
import { Typography } from "@material-tailwind/react";
import { CircularLoading } from "../../../components/circularIndeterminate/CircularLoading";
import { sources } from "../../../remoteSources/common/Sources";

function LoginScreen() {
  return (
    <div className="flex flex-row">
      <AuthBannerComponent className={"w-[45rem] lg-max:hidden"} />

      <LoginForm className="mx-auto w-fit" />
    </div>
  );
}

interface AuthFormProps {
  className: string;
}

function LoginForm(props: AuthFormProps) {
  const { className } = props;
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginBody>();

  return (
    <div
      className={`inline-flex h-screen flex-col lg:w-full lg-max:justify-center ${className}`}
    >
      <div className="flex flex-col items-end lg:m-5 lg-max:order-1 lg-max:mt-5">
        <span className="font-sans text-xs font-thin">
          Not a member?&ensp;{" "}
          <a
            className="font-sans text-xs font-thin text-primary"
            href="/signUp"
          >
            Sign up now
          </a>
        </span>
      </div>

      <form
        className="flex w-fit flex-col items-center justify-center lg:mx-auto lg:my-auto"
        onSubmit={handleSubmit(async (data) => {
          await sources.userSource.login(data).then(() => {
            console.log("successful");
          });
        })}
      >
        <MyInput
          {...register("username", {
            required: "You must enter your username",
          })}
          disabled={isSubmitting}
          error={errors.username?.message !== undefined}
          className={"inline w-80"}
          label="Username"
          type="text"
          onClick={() => {
            clearErrors("username");
            setError("username", { message: undefined });
          }}
        />
        <Typography
          key={"usernameError"}
          variant={"small"}
          className={`w-full text-error ${
            errors.username?.type ? "" : "hidden"
          }`}
        >
          {errors.username?.message ?? ""}
        </Typography>

        <div className="h-5" />

        <MyInput
          {...register("password", {
            required: "You must enter your password",
            minLength: { value: 4, message: "Minimum length of password is 4" },
          })}
          disabled={isSubmitting}
          className={"w-80"}
          label="Password"
          type="password"
          error={errors.password?.message !== undefined}
          onClick={() => {
            clearErrors("password");
            setError("password", { message: undefined });
          }}
        />
        <Typography
          key={"passwordError"}
          variant={"small"}
          className={`w-full text-error ${
            errors.password?.message ? "" : "hidden"
          }`}
        >
          {errors.password?.message ?? ""}
        </Typography>

        <div className="h-2" />

        <div className="flex w-full flex-row justify-end text-primary">
          <a className="font-sans text-xs font-thin" href="/forgot-password">
            Forgot Password?
          </a>
        </div>

        <div className="h-5" />

        <MyButton
          disabled={isSubmitting}
          className="w-80 font-sans normal-case"
          type={"submit"}
        >
          {isSubmitting ? <CircularLoading className={"h-5 w-5"} /> : "Sign In"}
        </MyButton>
      </form>
    </div>
  );
}

export default LoginScreen;
