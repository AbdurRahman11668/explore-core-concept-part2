import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer justify-between py-10 px-5 lg:px-20 bg-[#2C3E50] text-neutral-content">
        <aside>
        <Link
          to="/"
          className="text-3xl md:text-4xl font-bold text-[#1ABC9C]"
        >
          AR
        </Link>
          <p>
            @ 2023 All Rights Reserved.
            <br />
            Created by <span className="font-bold text-[#1ABC9C]">AR</span>
          </p>
        </aside>
        <nav>
          <header className="footer-title">AROUND THE WEB</header>
          <div className="grid grid-flow-col gap-4">
            <Link to="https://www.facebook.com/abdurrahman1222/">
              <div className="border-2 rounded-full border-white text-white text-xl p-3">
                <FaFacebookF />
              </div>
            </Link>
            <Link to="https://www.linkedin.com/in/abdur-rahman-81b290174/">
              <div className="border-2 rounded-full border-white text-white text-xl p-3">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link to="https://github.com/AbdurRahman11668">
              <div className="border-2 rounded-full border-white text-white text-xl p-3">
                <FaGithub />
              </div>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
