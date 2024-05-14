"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/subImage.png";
import { useState, useEffect, useRef } from "react";
import { ModalInstitucional } from "./modalInstitucional";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number>();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setShowDropdown(false);
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

  const handleMouseEnter = () => {
    setShowModal(true);
    clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    timerRef.current = window.setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  const handleModalMouseEnter = () => {
    clearTimeout(timerRef.current);
  };

  const handleModalMouseLeave = () => {
    handleMouseLeave();
  };

  return (
    <header
      className={`w-full flex items-center justify-between bg-neutral-950 h-20 md:h-32 px-4 md:px-12 sticky top-0 left-0 right-0 z-50 ${
        isScrolled ? "backdrop-filter backdrop-blur-sm bg-opacity-80" : ""
      }`}
    >
      <div className="flex items-center">
        <Link href="#" className="text-white" onClick={handleLinkClick}>
          <Image
            src={Logo}
            alt="Church Name"
            width={120}
            height={40}
            className="w-auto h-auto max-w-full max-h-full"
          />
        </Link>
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-8 items-center h-full">
          <li>
            <Link
              href="/"
              className="text-white hover:text-gray-300 h-full flex items-center relative hover:before:w-full hover:after:w-full before:absolute before:top-0 before:left-0 before:h-0.5 before:bg-white before:w-0 before:transition-all before:duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>

          <div
            className="text-white hover:text-gray-300 h-full flex items-center relative  hover:before:w-full hover:after:w-full before:absolute before:top-0 before:left-0 before:h-0.5 before:bg-white before:w-0 before:transition-all before:duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <li>
              <span className="flex items-center gap-[2px]">
                Institucional
                {showModal ? (
                  <MdOutlineArrowDropUp size={25} />
                ) : (
                  <MdOutlineArrowDropDown size={25} />
                )}{" "}
              </span>
              {showModal && (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <ModalInstitucional />
                </div>
              )}
            </li>
          </div>

          <li>
            <Link
              href="/agenda"
              className="text-white hover:text-gray-300 h-full flex items-center relative hover:before:w-full hover:after:w-full before:absolute before:top-0 before:left-0 before:h-0.5 before:bg-white before:w-0 before:transition-all before:duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300"
              onClick={handleLinkClick}
            >
              Agenda
            </Link>
          </li>
          <li>
            <Link
              href="contato"
              className="text-white hover:text-gray-300 h-full flex items-center relative hover:before:w-full hover:after:w-full before:absolute before:top-0 before:left-0 before:h-0.5 before:bg-white before:w-0 before:transition-all before:duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300"
              onClick={handleLinkClick}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
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
            }`}
          >
            <ul
              className={`
        flex flex-col p-4 transition-transform duration-300 transform 
        ${isMenuOpen ? "translate-y-0" : "translate-y-full"}
      `}
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
                  className="flex items-center gap-[2px] text-white hover:text-gray-300 block px-3 py-2 relative hover:before:w-auto hover:after:w-auto before:absolute before:top-0 before:left-0 before:h-0.5 before:bg-white before:w-0 before:transition-all before:duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300"
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
                        href="#"
                        className="text-white hover:text-gray-300 block py-2 hover:underline hover:underline-offset-2 ease-in duration-300"
                        onClick={handleLinkClick}
                      >
                        Nossa Visão
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-white hover:text-gray-300 block py-2 hover:underline hover:underline-offset-2 ease-in duration-300"
                        onClick={handleLinkClick}
                      >
                        Nossa Missão
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-white hover:text-gray-300 block py-2 hover:underline hover:underline-offset-2 ease-in duration-300"
                        onClick={handleLinkClick}
                      >
                        Nossos Valores
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
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
    </header>
  );
};
