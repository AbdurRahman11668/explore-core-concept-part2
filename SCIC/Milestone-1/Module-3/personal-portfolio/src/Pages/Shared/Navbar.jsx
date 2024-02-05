import { NavLink } from "react-router-dom";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link
          to="/"
          smooth={true}
          duration={500}
          className="text-white hover:text-[#1ABC9C] text-lg font-bold"
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-white hover:text-[#1ABC9C] text-lg font-bold"
        >
          ABOUT
        </Link>
      </li>
      <li>
        <Link
          to="education"
          smooth={true}
          duration={500}
          className="text-white hover:text-[#1ABC9C] text-lg font-bold"
        >
          EDUCATION
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="text-white hover:text-[#1ABC9C] text-lg font-bold"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-white hover:text-[#1ABC9C] text-lg font-bold"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-white hover:text-[#1ABC9C] text-lg font-bold"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-[#2C3E50] lg:px-20 fixed z-10">
      <div className="navbar-start justify-between lg:justify-normal">
        
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#2C3E50] rounded-box text-[#1ABC9C]"
          >
            {navLinks}

            <div className="flex py-5 justify-center md:justify-start lg:justify-end space-x-5 md:space-x-10">
              <Link
                to="https://github.com/AbdurRahman11668"
                className="text-2xl text-white hover:text-[#1ABC9C]"
              >
                <FaGithub></FaGithub>
              </Link>
              <Link
                to="https://www.linkedin.com/in/abdur-rahman-81b290174/"
                className="text-2xl text-white hover:text-[#1ABC9C]"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </ul>
        </div>
        <NavLink
          to="/"
          smooth={true}
          duration={500}
          className="text-3xl md:text-4xl font-bold text-[#1ABC9C]"
        >
          AR
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#1ABC9C] font-medium ">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex justify-center md:justify-start lg:justify-end space-x-5 md:space-x-10">
        <Link
          to="https://github.com/AbdurRahman11668"
          className="text-2xl text-white hover:text-[#1ABC9C]"
        >
          <FaGithub></FaGithub>
        </Link>
        <Link
          to="https://www.linkedin.com/in/abdur-rahman-81b290174/"
          className="text-2xl text-white hover:text-[#1ABC9C]"
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
