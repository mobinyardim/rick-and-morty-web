import { ElementType, useCallback, useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import { IconBaseProps } from "react-icons/lib/esm/iconBase";
import { User } from "models/src/User";
import { Avatar, Typography } from "@material-tailwind/react";
import { CircularUserPlaceHolder } from "../CircularUserPlaceHolder";
import { MyButton } from "../MyButton";
import * as IoIcon from "react-icons/io5";

export interface NavItem {
  title: string;
  className?: string;
  icon: ElementType<IconBaseProps>;
}

export interface NavBarProps {
  className?: string;
  user?: User;
  items?: Array<NavItem>;
  onSelect?: (navItem: NavItem) => void;

  selected?: NavItem;
  onLoginOrSignUpClick?: VoidFunction;
  onLogout?: VoidFunction;
  isLoading?: boolean;
}

export function Navbar({
  className,
  user,
  items,
  onSelect,
  selected,
  onLoginOrSignUpClick,
  onLogout,
  isLoading,
}: NavBarProps) {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebarViewState = () => setSidebar(!sidebar);

  return (
    <div className={""}>
      <div
        className={`flex h-16 items-center justify-start lg:hidden ${className}`}
      >
        <FaIcons.FaBars
          className="h-full w-16 p-5"
          onClick={toggleSidebarViewState}
        />
      </div>

      <nav
        className={`max-lg:w-72 fixed top-0 z-10 flex h-screen w-72 ${
          sidebar ? "lg:w-72" : "lg:w-24"
        } transform-gpu flex-col rounded-r-2xl bg-surface drop-shadow-md duration-500 ${
          sidebar ? "left-0" : "lg-max:-left-full"
        }`}
      >
        <div className="absolute flex w-full flex-row justify-end">
          <div
            className={`relative left-10 h-20 w-20 p-6`}
            onClick={toggleSidebarViewState}
          >
            <div className="z-10 m-auto h-8 w-8 rounded-full bg-background drop-shadow-2xl">
              <MdIcon.MdOutlineKeyboardArrowRight
                className={`m-auto h-8 w-8 transform-gpu duration-500 ${
                  sidebar ? "rotate-180" : ""
                }`}
              ></MdIcon.MdOutlineKeyboardArrowRight>
            </div>
          </div>
        </div>

        {user && (
          <div
            className={`z-10 mx-4 mt-5 flex h-16 cursor-pointer flex-row flex-nowrap items-center overflow-clip bg-transparent p-0 text-onBackgroundMedium ring-transparent hover:bg-transparent`}
          >
            {
              (user?.avatar ? (
                <Avatar
                  src={user?.avatar}
                  variant={"circular"}
                  className={"h-16 w-16 shrink-0 p-4 text-onBackgroundHigh"}
                />
              ) : (
                <CircularUserPlaceHolder
                  className={"h-16 w-16 shrink-0 p-4 text-onBackgroundHigh"}
                />
              )) as JSX.Element
            }
            <div className={"flex flex-col"}>
              <Typography variant={"small"}>
                {" "}
                {sidebar ? user.username : ""}
              </Typography>
              <Typography variant={"small"}>
                {" "}
                {sidebar ? user.email : ""}
              </Typography>
            </div>
          </div>
        )}

        {!user && !isLoading && (
          <MyButton
            variant="text"
            fullWidth={false}
            onClick={onLoginOrSignUpClick}
            className={`z-10 mx-4 mt-5 flex h-16 cursor-pointer flex-row flex-nowrap items-center overflow-clip bg-transparent p-0 text-onBackgroundMedium ring-transparent hover:bg-transparent`}
          >
            <CircularUserPlaceHolder
              className={"h-16 w-16 shrink-0 p-4 text-onBackgroundHigh"}
            />

            {sidebar && "Login/SignUp"}
          </MyButton>
        )}
        {isLoading && <div className={`shimmer mx-4 mt-5 h-16 rounded`} />}

        <NavItems
          className={"mt-20"}
          items={items}
          selected={selected}
          onSelect={onSelect}
          isFull={sidebar}
        />

        {user && (
          <MyButton
            variant="text"
            fullWidth={false}
            onClick={onLogout}
            className={`z-10 mx-4 mt-auto mb-5 flex h-16 cursor-pointer flex-row flex-nowrap items-center overflow-clip bg-transparent p-0 text-error ring-transparent hover:bg-transparent`}
          >
            <IoIcon.IoExitOutline
              className={"h-16 w-16 shrink-0 p-4 text-error"}
            />

            {"Logout"}
          </MyButton>
        )}

        {isLoading && (
          <div className={`shimmer z-10 mx-4 mt-auto mb-5 h-16 rounded`} />
        )}
      </nav>
    </div>
  );
}

interface NavItemsProps {
  className?: string;
  isFull?: boolean;
  items?: Array<NavItem>;
  selected?: NavItem;
  onSelect?: (navItem: NavItem) => void;
}

function NavItems({
  className,
  isFull,
  items,
  selected,
  onSelect,
}: NavItemsProps) {
  const handleSelectedItem = useCallback(
    (index: number, item?: NavItem, isFromUser?: boolean) => {
      document.documentElement.style.setProperty(
        "--menuItemSize",
        `${index * 4}rem`
      );
      if (item && !isFromUser) {
        onSelect?.(item);
      }
      setSelectedBackgroundTranslate(`translate-y-[var(--menuItemSize)] `);
    },
    [onSelect]
  );

  useEffect(() => {
    handleSelectedItem(
      selected ? items?.indexOf(selected) ?? 0 : 0,
      selected,
      true
    );
  }, [handleSelectedItem, items, selected]);

  const [selectedBackgroundTranslate, setSelectedBackgroundTranslate] =
    useState("translate-y-0");

  return (
    <div className={`${className}`}>
      {items && (
        <SelectedNavMenuItemBackground
          className={`transition-50 absolute w-full transform transform-gpu transition  ${selectedBackgroundTranslate}`}
        />
      )}
      <ul className={`gap-4`}>
        {items?.map((item, index) => {
          return (
            <li
              onClick={() => handleSelectedItem(index, item)}
              key={item.title}
            >
              <NavMenuItem name={item.title} Icon={item.icon} isFull={isFull} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

interface NavMenuItemProps {
  name: string;
  isFull?: boolean;
  Icon: ElementType<IconBaseProps>;
  onClick?: VoidFunction;
}

export function NavMenuItem({ name, isFull, Icon, onClick }: NavMenuItemProps) {
  return (
    <div
      className={`z-10 flex h-16 cursor-pointer flex-row flex-nowrap justify-evenly overflow-clip bg-transparent ring-transparent hover:bg-transparent`}
      onClick={onClick}
    >
      <div className={`h-16 w-1 shrink-0`} />
      <div className={"w-4 shrink-0"} />
      <MyButton
        variant={"text"}
        ripple={false}
        fullWidth={true}
        className={`mr-4 flex h-16 min-w-0 flex-shrink shrink grow flex-row items-center p-0 text-onBackgroundMedium`}
      >
        <Icon className={"h-16 w-16 shrink-0 p-4 text-onBackgroundHigh"} />
        {isFull ? name : ""}
      </MyButton>
    </div>
  );
}

interface SelectedNavMenuItemBackgroundProps {
  className?: string;
}

function SelectedNavMenuItemBackground(
  props: SelectedNavMenuItemBackgroundProps
) {
  return (
    <div
      className={`flex h-16 flex-row justify-evenly gap-4 pr-4 ${props.className}`}
    >
      <div className={`h-16 w-1 rounded-r bg-primary`} />
      <div className={` h-16 grow rounded-xl bg-primary/10`}></div>
    </div>
  );
}
