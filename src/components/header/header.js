import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as reselectCart from "pages/cart/reselect/cart-reselect";
import * as reselectLogin from "pages/login/reselect/login-reselect";
import { createStructuredSelector } from "reselect";
import { logoutRequest } from "../../pages/login/actions/index";
import { searchingData } from "pages/search/actions/index";
import { Input } from "antd";
import "./header.scss";
import { push } from "connected-react-router";

const { Search } = Input;
const HeaderComponent = () => {
  const dispatch = useDispatch();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { countItem } = useSelector(
    createStructuredSelector({
      countItem: reselectCart.countItemsSelector,
    })
  );
  const { data } = useSelector(
    createStructuredSelector({
      data: reselectLogin.getDataLoginSelector,
    })
  );
  const handleLogout = () => {
    dispatch(logoutRequest());
  };
  const handleShowMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const directToSearchPage = (value) => {
    if (value !== "") {
      dispatch(push(`/search/keyword=${value}`));
      dispatch(searchingData(value));
    }
  };
  return (
    // <!-- component -->
    <nav className="bg-purple-300 h-auto sm:bg-indigo-200 shadow fixed z-10 top-0 right-0 left-0">
      <div className="container mx-auto md:flex md:justify-between md:items-center">
        <Link
          to="/home"
          className="flex flex-row-reverse justify-between relative z-10 items-center px-6 py-3 sm:rounded h-full bg-purple-300 border-b-2"
        >
          <div className="hidden sm:block">
            <div className="text-gray-800 text-xl font-medium md:text-2xl hover:text-indigo-500">
              FOODS & DRINKS
            </div>
          </div>
          <div></div>
          <div
            className={`${
              isOpenMenu ? "invisible sr-only opacity-0" : "visible opacity-100"
            } transition-all duration-700 ease-in-out px-4 sm:hidden`}
          >
            <Search
              className=""
              maxLength={30}
              placeholder="Search name products..."
              allowClear
              onSearch={(value) => directToSearchPage(value)}
              enterButton
              size={"large"}
            />
          </div>
          {/* <!-- Mobile menu button --> */}
          <div className="flex md:hidden">
            <button
              onClick={handleShowMenu}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </Link>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div
          className={`md:flex items-center px-6 py-3 transition-all duration-700 relative z-0 md:mt-0 ${
            isOpenMenu ? "mt-0" : "-mt-210"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6 ">
            <Link
              to="/home"
              className="my-1 text-sm text-gray-800 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
            >
              Home
            </Link>
            <Link className="my-1 text-sm text-gray-800 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
              Contact
            </Link>
            <Link className="my-1 text-sm text-gray-800 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
              About
            </Link>
            <div className="md:hidden">
              {data ? (
                <div className="group flex flex-col">
                  <Link className="my-1 text-sm text-gray-800 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
                    Settings
                  </Link>

                  <Link
                    to="/login"
                    onClick={() => handleLogout()}
                    className="my-1 text-sm text-gray-800 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                  >
                    Logout
                  </Link>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="my-1 text-sm text-gray-800 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          <div className="flex justify-center md:block">
            <Link
              to="/cart"
              className="relative text-gray-800 hover:text-gray-600"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute -top-3 left-3 text-center w-6 h-6 flex justify-center items-center rounded-full bg-indigo-500 text-white p-1 text-xs">
                {countItem}
              </span>
            </Link>
          </div>
          <div className="hidden lg:block">
            {data ? (
              <div className="relative left-16 group">
                <div>
                  <button
                    type="button"
                    className="bg-transparent flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-0 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div className="text-sm invisible lg:visible text-gray-800 font-medium ml-2 hover:text-indigo-500">
                        Hi, {data.user.userName}
                      </div>
                    </div>
                  </button>
                </div>

                <div
                  className="bridge opacity-0 transform scale-95 duration-300 transition group-hover:transform group-hover:scale-95 invisible group-hover:opacity-100 group-hover:visible origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <Link
                    href="!#"
                    className="block px-4 py-2 text-sm text-gray-800 my-1  font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </Link>

                  <Link
                    to="/login"
                    onClick={() => handleLogout()}
                    className="block px-4 py-2 text-sm text-gray-800 my-1  font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="block px-4 py-2 text-sm text-gray-800 my-1  font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              >
                Login
              </Link>
            )}
          </div>
          <div className="hidden sm:block sm:ml-32">
            <Search
              maxLength={30}
              placeholder="Search name products..."
              allowClear
              onSearch={(value) => directToSearchPage(value)}
              enterButton
              size={"large"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(HeaderComponent);
