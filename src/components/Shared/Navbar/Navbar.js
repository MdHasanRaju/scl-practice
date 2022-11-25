import { userLoggedOut } from 'features/auth/authSlice';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import user from "../../../assets/images/user.png";
import logo from "../../../assets/images/Vector.png";
import HouseSvg from "../Svg/HouseSvg";
import MessageSvg from "../Svg/MessageSvg";
import NotificationSvg from "../Svg/NotificationSvg";
import UserSvg from "../Svg/UserSvg";
import DarkModeToggle from "./DarkModeToggle";

// const [showCommunity, setShowCommunity] = useState(false);
// const toggleCommunity = () => {
//   setShowCommunity(!showCommunity);
// };

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  const dispatch = useDispatch();
  const [showBar, setShowBar] = useState(false);

  const [isActiveHouse, setIsActiveHouse] = useState(false);
  const [isActiveMessage, setIsActiveMessage] = useState(false);
  const [isActiveNotification, setIsActiveNotification] = useState(false);
  const [isActiveUser, setIsActiveUser] = useState(false);

  const toggleBar = () => {
    setShowBar(!showBar);
  };

  return (
    <div
      className={`${isDarkMode ? "bg-gray-900" : "bg-[#ffffff]"
        } p-4 pb-0 border-b shadow-lg w-screen bg-[#ffffff] md:flex md:items-center md:justify-between md:pb-2 fixed top-0 z-10 `}
    >
      {/* <!--logo--> */}
      <div className="mb-4 flex items-center justify-between md:mb-0 md:w-[30%] sm:w-[100%]">
        <div className="flex items-center gap-x-4 w-[100%]">
          <h1 className="w-auto text-2xl leading-none">
            <Link to="/" className="no-underline">
              <img src={logo} alt="logo" />
            </Link>
          </h1>

          <div className="search-box flex items-center rounded-sm w-[100%] px-3 py-1 bg-[#F2F2F2]">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              className="w-[100%] placeholder:text-[14px] bg-transparent outline-none border-none focus:ring-0  border-0 pl-3"
              type="text"
              placeholder="Search people..."
            />
          </div>
        </div>

        {/* <!--bar for mobile menu--> */}
        <a
          onClick={toggleBar}
          href="/#"
          className="text-black xs:ml-3 sm:ml-3 lg:hidden md:hidden hover:text-orange"
        >
          <i className="fa fa-2x fa-bars"></i>
        </a>
      </div>

      <nav className={`${showBar ? "block " : "hidden"} md:block lg:block`}>
        <ul className="list-reset md:flex md:items-center">
          <li className="md:ml-4 sm:mt-4 md:mt-0">
            <NavLink
              to="/home"
              className={({ isActive }) => setIsActiveHouse(isActive)}
            >
              <HouseSvg isActive={isActiveHouse} />
            </NavLink>
          </li>

          <li className="md:ml-8 sm:mt-4 md:mt-0">
            <NavLink
              to="/meet"
              className={({ isActive }) => setIsActiveMessage(isActive)}
            >
              <MessageSvg isActive={isActiveMessage} />
            </NavLink>
          </li>

          <li className="md:ml-8 sm:mt-4 md:mt-0">
            <NavLink
              to="/notifications"
              className={({ isActive }) => setIsActiveNotification(isActive)}
            >
              <NotificationSvg isActive={isActiveNotification} />
            </NavLink>
          </li>
          <li className="md:ml-8 sm:mt-4 md:mt-0">
            <NavLink
              to="/profile"
              className={({ isActive }) => setIsActiveUser(isActive)}
            >
              <UserSvg isActive={isActiveUser} />
            </NavLink>
          </li>
        </ul>
        
      </nav>

      {/* <!--nav--> */}
      <nav className={`${showBar ? "block " : "hidden"} lg:block md:block`}>
        <ul className="list-reset md:flex md:items-center">
          <DarkModeToggle on={isDarkMode} onToggle={setIsDarkMode} />
          {/* <label
            for="default-toggle"
            class="inline-flex relative items-center cursor-pointer mr-6"
          >
            <input
              type="checkbox"
              value=""
              id="default-toggle"
              class="sr-only peer "
            />
            <div class="w-[6.3rem] h-12 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-12 after:w-12 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
          </label> */}

          <div class="dropdown dropdown-end">
            <label
              tabIndex="0"
              className="btn m-1 normal-case focus:bg-[#f2f2f2] hover:bg-[#f2f2f2] bg-[#F2F2F2] border-none"
            >
              <div class="w-8 rounded-full">
                <img className="rounded-md" src={user} alt="user" />
              </div>{" "}
              <span className="ml-3 text-[#000000] text-[12px]">Mathews</span>
              <i
                className={`fa-solid ${"fa-caret-down"} pr-2 ml-12 text-[#FFD700]`}
              ></i>
            </label>
            <ul
              tabIndex="0"
              className="p-2 space-y-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>

              <li>
                <button onClick={() => dispatch(userLoggedOut())} tabIndex="0" className="normal-case border-none btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
