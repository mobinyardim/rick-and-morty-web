import AuthBannerComponent from "../componenets/AuthBannerComponent";
import { MyInput } from "../../../components/MyInput";
import { MyButton } from "../../../components/MyButton";
import React, { useContext } from "react";
import { Checkbox, Typography } from "@material-tailwind/react";
import { Form, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SignUpBody } from "models/src/bodyModels/SignUpBody";
import { sources } from "../../../remoteSources/common/Sources";
import { MyAlertContext } from "../../../components/MyAlert";

function SignUpScreen() {
  return (
    <div className="flex flex-row">
      <AuthBannerComponent
        banner={"assets/rick-and-morty-fuck-banner.png"}
        className={"w-[45rem] lg-max:hidden"}
      />

      <SignUpForm className="mx-auto w-fit" />
    </div>
  );
}

interface AuthFormProps {
  className: string;
}

function SignUpForm({ className }: AuthFormProps) {
  const navigate = useNavigate();
  const { showAlert } = useContext(MyAlertContext);
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignUpBody>();

  return (
    <div
      className={`inline-flex h-screen max-w-full flex-col lg:w-full lg-max:justify-center ${className}`}
    >
      <div className="flex flex-col items-end lg:m-5 lg-max:order-1 lg-max:mt-20 lg-max:items-center">
        <span className="font-sans text-xs font-thin">
          Already a member?&ensp;{" "}
          <a className="font-sans text-xs font-thin text-primary" href="/login">
            Login
          </a>
        </span>
      </div>

      <Form
        className="mx-5 flex max-w-[26rem] flex-col items-center justify-between lg:mx-auto lg:my-auto"
        onSubmit={handleSubmit(async (data) => {
          const result = await sources.userSource.signUp(data);
          if ("data" in result) {
            showAlert(result.message, "success");
            navigate("/");
          } else {
            showAlert(result.message, "error");
          }
        })}
      >
        <div className="flex w-full flex-col justify-center gap-8 md:flex-row md:gap-2">
          <div className={"flex flex-col"}>
            <MyInput
              {...register("fullName", {
                required: "You must enter your full Name",
              })}
              className={"grow"}
              label="Full Name"
              type="text"
              disabled={isSubmitting}
              error={errors.fullName?.message !== undefined}
            />

            <Typography
              variant={"small"}
              className={`w-full text-error ${
                errors.fullName?.type ? "" : "hidden"
              }`}
            >
              {errors.fullName?.message ?? ""}
            </Typography>
          </div>
          <div className={"flex flex-col"}>
            <MyInput
              {...register("username", {
                required: "You must enter your username",
              })}
              className={"grow"}
              label="Username"
              type="text"
              error={errors.username?.message !== undefined}
            />

            <Typography
              variant={"small"}
              className={`w-full text-error ${
                errors.username?.type ? "" : "hidden"
              }`}
            >
              {errors.username?.message ?? ""}
            </Typography>
          </div>
        </div>

        <div className="h-8" />

        <MyInput
          {...register("email", {
            required: "You must enter your email",
            pattern: {
              value: /[A-Za-z]{3}/,
              message: "Pleas enter a valid email!",
            },
          })}
          className={"grow"}
          label="Email"
          type="email"
          error={errors.email?.message !== undefined}
        />
        <Typography
          variant={"small"}
          className={`w-full text-error ${errors.email?.type ? "" : "hidden"}`}
        >
          {errors.email?.message ?? ""}
        </Typography>

        <div className="h-8" />

        <MyInput
          {...register("password", {
            required: "You must enter a password",
          })}
          className={"grow"}
          label="Password"
          type="password"
          error={errors.password?.message !== undefined}
        />
        <Typography
          variant={"small"}
          className={`w-full text-error ${
            errors.password?.type ? "" : "hidden"
          }`}
        >
          {errors.password?.message ?? ""}
        </Typography>

        <div className="h-5" />

        <Checkbox
          label="Creating an account means you’re okay with our Terms of Service and
            Privacy Policy."
        />

        <div className="mt-10 flex w-full  flex-col justify-start">
          <MyButton className="md-max:w-full md:w-[15rem]" type={"submit"}>
            Sign Up
          </MyButton>
        </div>
      </Form>
    </div>
  );
}

export default SignUpScreen;
