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
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div
        className={`flex h-16 items-center justify-start bg-background ${className}`}
      >
        <FaIcons.FaBars className="h-full w-16 p-5" onClick={showSidebar} />
      </div>

      <nav
        className={`fixed top-0 z-10 flex h-screen w-72 transform-gpu flex-col rounded-r-2xl bg-background drop-shadow-md duration-500 ${
          sidebar ? "left-0" : "-left-full"
        }`}
      >
        <div className="absolute flex w-full flex-row justify-end">
          <div
            className="relative left-10 h-20 w-20  p-6"
            onClick={showSidebar}
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

        <NavItems className={"mt-20"} items={items} onSelect={onSelect} />
      </nav>
    </>
  );
}

interface NavItemsProps {
  className?: string;
  items?: Array<NavItem>;
  onSelect?: (navItem: NavItem) => void;
}

function NavItems({ className, items, onSelect }: NavItemsProps) {
  const [selectedBackgroundTranslate, setSelectedBackgroundTranslate] =
    useState("translate-y-0");

  function handleSelectedItem(item: NavItem, index: number) {
    console.log(`clicked ${index}`);
    console.log(`translate-y-[${index * 4}rem]`);
    onSelect?.(item);
    setSelectedBackgroundTranslate(`translate-y-[${index * 4}rem] `);
  }

  return (
    <div className={`${className}`}>
      {items && (
        <SelectedNavMenuItemBackground
          className={`transition-50 absolute w-full transform transition  ${selectedBackgroundTranslate}`}
        />
      )}
      <ul className={`gap-4`}>
        {items?.map((item, index) => {
          return (
            <li
              onClick={() => handleSelectedItem(item, index)}
              key={item.title}
            >
              <NavMenuItem name={item.title} Icon={item.icon} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

interface NavMenuItemProps {
  name: string;
  Icon: ElementType<IconBaseProps>;
  onClick?: VoidFunction;
}

function NavMenuItem({ name, Icon, onClick }: NavMenuItemProps) {
  return (
    <div
      className={`flex h-16 cursor-pointer flex-row justify-evenly gap-4 gap-4 bg-transparent pr-4`}
      onClick={onClick}
    >
      <div className={`h-16 w-1`} />
      <div className={`z-10 flex h-16 grow flex-row`}>
        <Icon className={"h-16 w-16 p-3"} />
        <span className={"my-auto w-fit justify-center"}>{name}</span>
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
