"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/subImage.png";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full flex items-center justify-between bg-neutral-900 h-32 px-4 md:px-12">
      <Link href="#" className="text-white">
        <Image
          src={Logo}
          alt="Church Name"
          width={120}
          height={40}
          className="w-auto h-auto max-w-full max-h-full"
        />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Agenda
            </Link>
          </li>
          <li>
            <Link href="#" className="text-white hover:text-gray-300">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <div className="md:hidden relative">
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
          <div className="md:hidden fixed top-28 w-full left-0 bg-neutral-900 z-50 overflow-hidden">
            <ul className="flex flex-col p-4">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 block px-3 py-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 block px-3 py-2"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300 block px-3 py-2"
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
