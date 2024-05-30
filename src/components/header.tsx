"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/subImage.png";
import { useState, useEffect, useRef } from "react";
import { ModalInstitucional } from "./modalInstitucional";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { MenuMobile } from "./menuMobile";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const timerRef = useRef<number>();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
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
        <Link href="/" className="text-white" onClick={handleLinkClick}>
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
              href="/generosidade"
              className="text-white hover:text-gray-300 h-full flex items-center relative hover:before:w-full hover:after:w-full before:absolute before:top-0 before:left-0 before:h-0.5 before:bg-white before:w-0 before:transition-all before:duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300"
              onClick={handleLinkClick}
            >
              Generosidade
            </Link>
          </li>

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

      <MenuMobile />
    </header>
  );
};
