"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

export const MenuMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setShowDropdown(false);
  };

  return (
    <div className="md:hidden flex items-center ml-auto">
      <button
        className="text-white hover:text-gray-300 focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      {isMenuOpen && (
        <div
          className={`md:hidden fixed top-20 w-full left-0 bg-neutral-950 z-50 overflow-hidden ease-linear duration-300 ${
            isScrolled ? "backdrop-filter backdrop-blur-sm bg-opacity-80" : ""
          } transform transition-all duration-500`}
        >
          <ul
            className={`flex flex-col p-4 transition-transform duration-500 transform ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="w-full h-[4px] text-gray-200" />
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-300 block px-3 py-2 relative hover:before:w-auto hover:after:w-auto before:absolute before:top-0 before:left-0 before:h-0.5 before:bg-white before:w-0 before:transition-all before:duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>

            <li>
              <span
                className="flex items-center gap-[2px] text-white hover:text-gray-300 px-3 py-2 relative hover:before:w-auto hover:after:w-auto before:absolute before:top-0 before:left-0 before:h-0.5 before:bg-white before:w-0 before:transition-all before:duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Institucional
                {showDropdown ? (
                  <MdOutlineArrowDropUp size={25} />
                ) : (
                  <MdOutlineArrowDropDown size={25} />
                )}
              </span>
              {showDropdown && (
                <ul className="ml-6">
                  <li>
                    <Link
                      href="/sobre-nos"
                      className="text-white hover:text-gray-300 block py-2 hover:underline hover:underline-offset-2 ease-in duration-300"
                      onClick={handleLinkClick}
                    >
                      Sobre nós
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/visao"
                      className="text-white hover:text-gray-300 block py-2 hover:underline hover:underline-offset-2 ease-in duration-300"
                      onClick={handleLinkClick}
                    >
                      Nossa Visão
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/missao"
                      className="text-white hover:text-gray-300 block py-2 hover:underline hover:underline-offset-2 ease-in duration-300"
                      onClick={handleLinkClick}
                    >
                      Nossa Missão
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/valores"
                      className="text-white hover:text-gray-300 block py-2 hover:underline hover:underline-offset-2 ease-in duration-300"
                      onClick={handleLinkClick}
                    >
                      Nossos Valores
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cultura"
                      className="text-white hover:text-gray-300 block py-2 hover:underline hover:underline-offset-2 ease-in duration-300"
                      onClick={handleLinkClick}
                    >
                      Nossa Cultura
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className={`${showDropdown ? "mt-2" : "mt-0"}`}>
              <li>
                <Link
                  href="/generosidade"
                  className="text-white hover:text-gray-300 block px-3 py-2 relative hover:before:w-auto hover:after:w-auto before:absolute before:top-0 before:left-0 before:h-0.5 before:bg-white before:w-0 before:transition-all before:duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300"
                  onClick={handleLinkClick}
                >
                  Generosidade
                </Link>
              </li>
              <Link
                href="/agenda"
                className={`text-white hover:text-gray-300 block px-3 py-2 relative hover:before:w-auto hover:after:w-auto before:absolute before:top-0 before:left-0 before:h-0.5 before:bg-white before:w-0 before:transition-all before:duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300`}
                onClick={handleLinkClick}
              >
                Agenda
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="text-white hover:text-gray-300 block px-3 py-2 relative hover:before:w-auto hover:after:w-auto before:absolute before:top-0 before:left-0 before:h-0.5 before:bg-white before:w-0 before:transition-all before:duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300"
                onClick={handleLinkClick}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
