import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, NavItem } from "../../components/navBar/Navbar";
import * as IoIcon from "react-icons/io5";

const menuItems: Array<NavItem> = [
  {
    title: "Home",
    className: "",
    icon: IoIcon.IoHomeOutline,
  },
  {
    title: "Characters",
    className: "",
    icon: IoIcon.IoPersonOutline,
  },
  {
    title: "Locations",
    className: "",
    icon: IoIcon.IoLocationOutline,
  },
  {
    title: "Episodes",
    className: "",
    icon: IoIcon.IoFilmOutline,
  },
];

function MainScreen() {
  const navigate = useNavigate();

  // @ts-ignore
  return (
    <div>
      <Navbar
        items={menuItems}
        onSelect={(navItem) => {
          switch (navItem) {
            case menuItems[0]: {
              navigate("/");
              break;
            }
            case menuItems[1]: {
              navigate("/characters");
              break;
            }
            case menuItems[2]: {
              navigate("/locations");
              break;
            }
            case menuItems[3]: {
              navigate("/episodes");
              break;
            }
          }
        }}
      />
      <Outlet />
    </div>
  );
}

export default MainScreen;
