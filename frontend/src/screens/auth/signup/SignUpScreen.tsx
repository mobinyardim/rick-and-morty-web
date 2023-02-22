import AuthBannerComponent from "../componenets/AuthBannerComponent";
import { MyInput } from "../../../components/MyInput";
import { MyButton } from "../../../components/MyButton";
import React from "react";
import { Checkbox } from "@material-tailwind/react";
import { Form } from "react-router-dom";

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

      <Form className="mx-5 flex max-w-[26rem] flex-col items-center justify-between lg:mx-auto lg:my-auto">
        <div className="flex w-full flex-col justify-center gap-8 md:flex-row md:gap-2">
          <MyInput className={"grow"} label="Name" type="text" />
          <MyInput className={"grow"} label="Username" type="text" />
        </div>

        <div className="h-8" />

        <MyInput className={"grow"} label="Email" type="email" />

        <div className="h-8" />

        <MyInput className={"grow"} label="Password" type="password" />

        <div className="h-5" />

        <Checkbox
          label="Creating an account means you’re okay with our Terms of Service and
            Privacy Policy."
        />

        <div className="mt-10 flex w-full  flex-col justify-start">
          <MyButton className="md-max:w-full md:w-[15rem]">Sign Up</MyButton>
        </div>
      </Form>
    </div>
  );
}

export default SignUpScreen;
