export interface AuthBannerComponentProps {
  className?: string;
}

function AuthBannerComponent(props: AuthBannerComponentProps) {
  const { className } = props;
  return (
    <div
      className={`inline-flex h-screen w-full flex-col justify-evenly bg-primary/80 ${className}`}
    >
      <div className={"flex h-screen w-full flex-col justify-center"}>
        <span className="my-6 mx-auto inline w-fit font-sans text-2xl font-normal text-onPrimary">
          The Rick and Morty API
        </span>

        <img
          className="mx-12"
          src={"assets/rick-and-morty-banner.png"}
          alt="The Rick and morty wallpaper"
        />
      </div>

      <div className="mb-5 ml-10 flex flex-row">
        <span className="font-sans font-thin text-sm text-onPrimary">by&ensp;</span>
        <a
          className=" font-sans font-thin text-sm text-onPrimary underline"
          href={"https://github.com/mobinyardim"}
        >
          Mobin Yardim
        </a>
      </div>
    </div>
  );
}

export default AuthBannerComponent;
