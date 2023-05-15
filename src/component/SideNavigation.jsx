import { Link, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/icons/HomeIcon.svg";
import { ReactComponent as EmptyHomeIcon } from "../assets/icons/EmptyHomeIcon.svg";
import { ReactComponent as SearchIcon } from "../assets/icons/SearchIcon.svg";
import { ReactComponent as FillSearchIcon } from "../assets/icons/FillSearchIcon.svg";
import { ReactComponent as LibraryIcon } from "../assets/icons/LibraryIcon.svg";

const NavigationBar = () => {
  const location = useLocation();
  const navItems = [
    {
      link: "/",
      title: "Home",
      icon:
        "/" == location.pathname ? (
          <>
            <HomeIcon />
          </>
        ) : (
          <>
            <EmptyHomeIcon />
          </>
        ),
    },
    {
      link: "/search",
      title: "Search",
      icon:
        "/search" == location.pathname ? (
          <>
            <FillSearchIcon />
          </>
        ) : (
          <>
            <SearchIcon />
          </>
        ),
    },
  ];

  return (
    <>
      <nav className="px-[12px] py-[8px] bg-[rgb(18,18,18)] rounded-[8px]">
        <ul className="flex flex-col">
          {navItems.map((navItem) => {
            const { link, title, icon } = navItem;
            return (
              <li className="px-[12px] py-[4px]">
                <Link
                  to={link}
                  className={`flex gap-[20px] justify-start items-center h-[40px] navItem-hover ${
                    link == location.pathname ? "navItem-hover--active" : ""
                  }`}
                >
                  {icon}
                  <span className="text-[16px] font-[700]">{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

const Library = () => {
  const likedSongs = [];
  return (
    <>
      <div className="flex flex-col bg-[rgb(18,18,18)] rounded-[8px] flex-1 w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-1 gap-[12px] navItem-hover px-[16px] py-[8px] cursor-pointer">
            <LibraryIcon />
            <span className="text-[16px] font-[700]">Your Library</span>
          </div>
        </div>
        <div className="px-[8px] flex flex-col">
          <div className="w-full h-[34px]"></div>
          <ul></ul>
        </div>
      </div>
    </>
  );
};

const SideNavigation = () => {
  return (
    <>
      <div className="w-[300px] flex flex-col flex-1 gap-[8px]">
        <NavigationBar />
        <Library />
      </div>
    </>
  );
};

export default SideNavigation;
