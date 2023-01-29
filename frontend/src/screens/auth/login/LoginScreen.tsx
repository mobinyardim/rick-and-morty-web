import AuthBannerComponent from "../componenets/AuthBannerComponent";
import { MyInput } from "../../../components/MyInput";
import { MyButton } from "../../../components/MyButton";

function LoginScreen() {
  return (
    <div className="flex flex-row">
      <AuthBannerComponent className={"w-[30rem] lg-max:hidden"} />

      <LoginForm className="mx-auto w-fit" />
    </div>
  );
}

interface AuthFormProps {
  className: string;
}

function LoginForm(props: AuthFormProps) {
  const { className } = props;
  return (
    <div
      className={`inline-flex h-screen flex-col lg:w-full lg-max:justify-center ${className}`}
    >
      <div className="flex flex-col items-end lg-max:mt-5 lg:m-5 lg-max:order-1">
        <span className="font-sans text-xs font-thin">
          Not a member?&ensp;{" "}
          <a className="font-sans text-xs font-thin text-primary" href="signIn">
            Sign up now
          </a>
        </span>
      </div>

      <div className="flex w-fit flex-col items-center justify-center lg:mx-auto lg:my-auto">
        <MyInput className={"inline w-80"} label="Email" type="email" />

        <div className="h-5" />

        <MyInput className={"w-80"} label="Password" type="password" />

        <div className="h-2" />

        <div className="flex w-full flex-row justify-end text-primary">
          <a className="font-sans text-xs font-thin" href="/forgot-password">
            Forgot Password?
          </a>
        </div>

        <div className="h-5" />

        <MyButton className="w-80 font-sans normal-case">Sign In</MyButton>
      </div>
    </div>
  );
}

export default LoginScreen;
