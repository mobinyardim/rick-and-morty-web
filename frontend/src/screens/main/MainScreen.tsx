import React, {useCallback, useEffect, useState} from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Navbar, NavItem } from "../../components/navBar/Navbar";
import * as IoIcon from "react-icons/io5";
import { useRouteLoaderData } from "../../utils/ReactRouterUtils";
import { charactersLoader } from "../../loaders/characters/CharactersLoader";
import { useCharactersStore } from "../../stores/CharctersStore";
import { Character } from "models/src/Character";

interface Path {
  path: string;
}

const menuItems: Array<NavItem & Path> = [
  {
    title: "Home",
    className: "",
    icon: IoIcon.IoHomeOutline,
    path: "/",
  },
  {
    title: "Characters",
    className: "",
    icon: IoIcon.IoPersonOutline,
    path: "/characters",
  },
  {
    title: "Locations",
    className: "",
    icon: IoIcon.IoLocationOutline,
    path: "/locations",
  },
  {
    title: "Episodes",
    className: "",
    icon: IoIcon.IoFilmOutline,
    path: "/episodes",
  },
];

function MainScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState<NavItem>(menuItems[0]);
  const charactersFirstPage = useRouteLoaderData<typeof charactersLoader>("root");
  const charactersStore = useCharactersStore();

  const addCharacters = useCallback((characters:Character[])=>{
    charactersStore.addCharacters(characters)
  },[charactersStore])

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const firstPage = await charactersFirstPage.metrics;
      console.log("isIgnore:" + ignore  + "length:" +charactersStore.characters.length);
      if (!ignore && !charactersStore.characters.length) {
        addCharacters(firstPage.data);
      }
    }
    fetchData().catch(console.error)

    return () => {
      ignore = true;
    };
  },[addCharacters, charactersFirstPage.metrics, charactersStore]);

  useEffect(() => {
    const newSelectedTab = menuItems.find((item) => {
      return item.path === location.pathname;
    });
    if (selectedTab !== newSelectedTab) {
      setSelectedTab(newSelectedTab ?? menuItems[0]);
    }
  }, [location, selectedTab]);

  // @ts-ignore
  return (
    <div>
      <Navbar
        items={menuItems}
        selected={selectedTab}
        onSelect={(navItem) => {
          setSelectedTab(navItem);
          const path =
            menuItems.find((item) => {
              return item.title === navItem.title;
            })?.path ?? "";
          navigate(path);
        }}
      />
      <Outlet />
    </div>
  );
}

export default MainScreen;
