import React from "react";
import {
  Avatar,
  Button,
  Dropdown,
  Navbar,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-yellow-200 rounded-xl text-blue-600">
          Avenue
        </span>
        The Blog App
      </Link>
      <form className="ml-auto">
        <TextInput
          type="text"
          placeholder="Search.."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className=" w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className=" flex gap-2 md:order-2 ">
        <Button
          className=" w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button
              gradientDuoTone="tealToLime"
              className="bg-gradient-to-r  hover:from-teal-500 hover:to-lime-500 rounded"
            >
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="md:flex md:flex-row md:space-x-8 md:text-sm md:font-medium p-2 md:order-2 md:justify-items-center">
        <Navbar.Link
          active={path === "/"}
          as={"div"}
          className={path === "/" ? "text-blue-600" : ""}
        >
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/about"}
          as={"div"}
          className={path === "/about" ? "text-blue-600" : ""}
        >
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/projects"}
          as={"div"}
          className={path === "/projects" ? "text-blue-600" : ""}
        >
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
