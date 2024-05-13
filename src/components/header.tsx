"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/subImage.png";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full flex items-center justify-between bg-neutral-950 h-20 md:h-32 px-4 md:px-12 sticky top-0 left-0 right-0 z-50 ${
        isScrolled ? "backdrop-filter backdrop-blur-sm bg-opacity-80" : ""
      }`}
    >
      <div className="flex items-center">
        <Link href="#" className="text-white">
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
        <ul className="flex gap-6 items-center h-full">
          <li>
            <Link
              href="/"
              className="text-white hover:text-gray-300 h-full flex items-center relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/agenda"
              className="text-white hover:text-gray-300 h-full flex items-center relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300"
            >
              Agenda
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white hover:text-gray-300 h-full flex items-center relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-white after:transition-all after:duration-300"
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
            className={`md:hidden fixed top-20 w-full left-0 bg-neutral-950 z-50 overflow-hidden ${
              isScrolled ? "backdrop-filter backdrop-blur-sm bg-opacity-80" : ""
            }`}
          >
            <ul
              className={`flex flex-col p-4 transition-transform duration-300 transform ${
                isMenuOpen ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-gray-300 block px-3 py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-auto after:h-0.5 after:bg-white after:transition-all after:duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/agenda"
                  className="text-white hover:text-gray-300 block px-3 py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-auto after:h-0.5 after:bg-white after:transition-all after:duration-300"
                >
                  Agenda
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 block px-3 py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-auto after:h-0.5 after:bg-white after:transition-all after:duration-300"
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
