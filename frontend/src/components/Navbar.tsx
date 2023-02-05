import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import { IconType } from "react-icons";

export interface NavItem {
  title: string;
  className?: string;
  icon: IconType;
}

export interface NavBarProps {
  className?: string;
  items?: Array<NavItem>;
  onSelect?: (navItem: NavItem) => void;
}

export function Navbar(props: NavBarProps) {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={`flex h-16 items-center justify-start bg-background`}>
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

        <ul>
          <li>
            <NavMenuItem />
          </li>
        </ul>
      </nav>
    </>
  );
}

function NavMenuItem() {
  return (
    <div className={`flex h-16 flex-row justify-evenly gap-4 pr-4`}>
      <div className={`h-16 w-1 rounded-r bg-primary`} />
      <div className={` h-16 grow rounded-xl bg-primary/10`}></div>
    </div>
  );
}
