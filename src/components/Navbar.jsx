// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { getNavLinks } from "../constants"; // dynamic nav links based on language
import { logo, menu, close } from "../assets";
import { linkedin } from "../assets"; // add at top

const Navbar = ({ language, setLanguage }) => {
  const [active, setActive] = React.useState("");
  const [toggle, setToggle] = React.useState(false);

  const navLinks = getNavLinks(language); // get nav links dynamically

  const logoText = {
    en: { name: "Chaymaa", role: "Software Engineer" },
    fr: { name: "Chaymaa", role: "Ingénieure Logicielle" },
  };

  const { name, role } = logoText[language];

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center py-5 bg-[#050816]/90 ${styles.paddingX}`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {name} &nbsp;
            <span className="sm:block hidden">| {role}</span>
          </p>
        </Link>

        {/* Desktop Menu + Language Button */}
        <div className="flex items-center gap-6">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

            {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/chaymaachorfi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
                title="LinkedIn"
              >
                  <img
                      src= {linkedin} // path to your LinkedIn logo image
                      alt="LinkedIn"
                      className="w-6 h-6 object-contain hover:opacity-80 transition"
                    />
              </a>
          {/* Language Switch Button */}
          <button
            onClick={() =>
              setLanguage(language === "en" ? "fr" : "en")
            }
            className="ml-4 px-3 py-1 rounded-md border border-white text-white hover:bg-white hover:text-[#050816] transition cursor-pointer"
          >
            {language.toUpperCase()}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-50 rounded-xl flex-col gap-4`}
          >
            <ul className="list-none flex flex-col gap-4 items-start">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

            {/* Mobile Language Button */}
            <button
              onClick={() => {
                setLanguage(language === "en" ? "fr" : "en");
                setToggle(false);
              }}
              className="mt-4 px-3 py-1 rounded-md border border-white text-white hover:bg-white hover:text-[#050816] transition"
            >
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
