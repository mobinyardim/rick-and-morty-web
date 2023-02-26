import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Await,
  Outlet,
  useLocation,
  useNavigate,
  useRevalidator,
} from "react-router-dom";
import { Navbar, NavItem } from "../../components/navBar/Navbar";
import * as IoIcon from "react-icons/io5";
import { useRouteLoaderData } from "../../utils/ReactRouterUtils";
import { charactersLoader } from "../../loaders/characters/CharactersLoader";
import { useCharactersStore } from "../../stores/CharctersStore";
import { Character } from "models/src/Character";
import { Pagination, Success } from "models/src/Result";
import { userLoader } from "../../loaders/characters/UserLoader";
import { User } from "models/src/User";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { MyButton } from "../../components/MyButton";
import { sources } from "../../remoteSources/common/Sources";
import { MyAlertContext } from "../../components/MyAlert";

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
  const { showAlert } = useContext(MyAlertContext);

  const navigate = useNavigate();
  const location = useLocation();
  const revalidator = useRevalidator();

  const user = useRouteLoaderData<typeof userLoader>("main");
  const charactersFirstPage =
    useRouteLoaderData<typeof charactersLoader>("root");
  const charactersStore = useCharactersStore();

  const [selectedTab, setSelectedTab] = useState<NavItem>(menuItems[0]);
  const [isLogoutDialogVisible, setIsLogoutDialogVisible] = useState(false);
  const [isLogoutButtonLoading, setIsLogoutButtonLoading] = useState(false);

  const addCharacters = useCallback(
    (characters: Character[], pagination?: Pagination) => {
      charactersStore.addCharacters(characters, pagination);
    },
    [charactersStore]
  );

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const firstPage = await charactersFirstPage.metrics;
      if (
        !ignore &&
        !charactersStore.characters.length &&
        firstPage.kind === "success"
      ) {
        addCharacters(firstPage.data, firstPage.pagination);
      }
    }

    fetchData().catch(console.error);

    return () => {
      ignore = true;
    };
  }, [addCharacters, charactersFirstPage.metrics, charactersStore]);

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
      <Suspense
        fallback={
          <Navbar
            isLoading={true}
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
        }
      >
        <Await resolve={user.metrics}>
          {(user: Awaited<Success<User>>) => (
            <Navbar
              user={user.data}
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
              onLoginOrSignUpClick={() => {
                navigate("/login");
              }}
              onLogout={() => {
                setIsLogoutDialogVisible(true);
              }}
            />
          )}
        </Await>
      </Suspense>

      <Outlet />

      <Dialog
        open={isLogoutDialogVisible}
        handler={setIsLogoutDialogVisible}
        size={"lg"}
      >
        <DialogHeader>{"Logout from account!"}</DialogHeader>
        <DialogBody>
          {"Are you sure that want to logout from your account?"}
        </DialogBody>
        <DialogFooter className={"gap-4"}>
          <MyButton
            disabled={isLogoutButtonLoading}
            variant={"outlined"}
            color={"gray"}
            onClick={() => {
              setIsLogoutDialogVisible(false);
            }}
          >
            Cancel
          </MyButton>
          <MyButton
            disabled={isLogoutButtonLoading}
            variant={"filled"}
            color={"red"}
            isLoading={isLogoutButtonLoading}
            onClick={async () => {
              setIsLogoutButtonLoading(true);
              const result = await sources.userSource.logout();
              if (result.kind === "success") {
                revalidator.revalidate();
                setIsLogoutButtonLoading(false);
                setIsLogoutDialogVisible(false);
                showAlert(result.message, "success");
              } else {
                setIsLogoutButtonLoading(false);
                setIsLogoutDialogVisible(false);
                showAlert(result.message, "error");
              }
            }}
          >
            Logout
          </MyButton>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default MainScreen;
