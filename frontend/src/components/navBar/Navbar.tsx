import { ElementType, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import { IconBaseProps } from "react-icons/lib/esm/iconBase";

export interface NavItem {
  title: string;
  className?: string;
  icon: ElementType<IconBaseProps>;
}

export interface NavBarProps {
  className?: string;
  items?: Array<NavItem>;
  onSelect?: (navItem: NavItem) => void;
}

export function Navbar({ className, items, onSelect }: NavBarProps) {
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
        } transform-gpu flex-col rounded-r-2xl bg-background drop-shadow-md duration-500 ${
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

        <NavItems
          className={"mt-20"}
          items={items}
          onSelect={onSelect}
          isFull={sidebar}
        />
      </nav>
    </div>
  );
}

interface NavItemsProps {
  className?: string;
  isFull?: boolean;
  items?: Array<NavItem>;
  onSelect?: (navItem: NavItem) => void;
}

function NavItems({ className, isFull, items, onSelect }: NavItemsProps) {
  const [selectedBackgroundTranslate, setSelectedBackgroundTranslate] =
    useState("translate-y-0");

  function handleSelectedItem(item: NavItem, index: number) {
    document.documentElement.style.setProperty(
      "--menuItemSize",
      `${index * 4}rem`
    );
    onSelect?.(item);
    setSelectedBackgroundTranslate(`translate-y-[var(--menuItemSize)] `);
  }

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
              onClick={() => handleSelectedItem(item, index)}
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
      <div className={`flex h-16 min-w-0 flex-shrink shrink grow flex-row`}>
        <Icon className={"h-16 w-16 shrink-0 p-3"} />
        <span
          className={`my-auto w-fit min-w-0 justify-center whitespace-nowrap ${
            isFull ? "lg:visible lg:w-fit" : "lg:invisible lg:w-0"
          } overflow-clip transition delay-500 ease-in-out`}
        >
          {name}
        </span>
      </div>
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
