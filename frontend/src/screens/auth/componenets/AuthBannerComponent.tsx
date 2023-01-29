export interface AuthBannerComponentProps {
  className?: string;
  banner?: string;
}

function AuthBannerComponent(props: AuthBannerComponentProps) {
  let { className, banner } = props;
  if (!banner) {
    banner = "assets/rick-and-morty-banner.png";
  }
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
          src={banner}
          alt="The Rick and morty wallpaper"
        />
      </div>

      <div className="mb-5 ml-10 flex flex-row">
        <span className="font-sans text-sm font-thin text-onPrimary">
          by&ensp;
        </span>
        <a
          className=" font-sans text-sm font-thin text-onPrimary underline"
          href={"https://github.com/mobinyardim"}
        >
          Mobin Yardim
        </a>
      </div>
    </div>
  );
}

export default AuthBannerComponent;
