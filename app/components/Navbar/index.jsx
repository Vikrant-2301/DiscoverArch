"use client";
import React, { useState, useEffect } from "react";
import LogoImage from "../../../public/images/logo_no.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // State to manage dropdown visibility
  const [showCompetitionDropdown, setShowCompetitionDropdown] = useState(false);
  const [showFeaturedDropdown, setShowFeaturedDropdown] = useState(false);

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`fixed top-0 z-50 w-[85%] bg-[#f9fcff] rounded-full mt-2 ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition"
            : "absolute"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-around px-4 py-2 sm:px-6 lg:px-4">
          <div className="inline-flex items-center space-x-2">
            <span className="ml-2">
              <Image src={LogoImage} alt="Logo" height={40} />
            </span>
            <span className="font-semibold">DiscoverArch</span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              <li>
                <a
                  href="/"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#aboutus-section"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Blogs
                </a>
              </li>
              {/* Competition Dropdown */}
              <li
                onMouseEnter={() => setShowCompetitionDropdown(true)}
                onMouseLeave={() => setShowCompetitionDropdown(false)}
              >
                <div className="relative inline-block">
                  <span className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 cursor-pointer">
                    Competition
                    <span className="ml-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </span>
                  {/* Dropdown content */}
                  {showCompetitionDropdown && (
                    <div
                      className="absolute mt-2 py-2 w-40 bg-white shadow-md rounded-md"
                      onMouseEnter={() => setShowCompetitionDropdown(true)}
                      onMouseLeave={() => setShowCompetitionDropdown(false)}
                    >
                      <a
                        href="/Competition"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Architopia
                      </a>
                    </div>
                  )}
                </div>
              </li>
              {/* Featured Dropdown */}
              <li
                onMouseEnter={() => setShowFeaturedDropdown(true)}
                onMouseLeave={() => setShowFeaturedDropdown(false)}
              >
                <div className="relative inline-block">
                  <span className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 cursor-pointer">
                    Featured
                    <span className="ml-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </span>
                  {/* Dropdown content */}
                  {showFeaturedDropdown && (
                    <div
                      className="absolute mt-2 py-2 w-40 bg-white shadow-md rounded-md"
                      onMouseEnter={() => setShowFeaturedDropdown(true)}
                      onMouseLeave={() => setShowFeaturedDropdown(false)}
                    >
                      <a
                        href="/Featured"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Architopia
                      </a>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <a
                  href="#contact-section"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden space-x-2 lg:block">
            <Link href="/login">
              <button
                type="button"
                className="rounded-full px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Log In
              </button>
            </Link>
            <Link href="/signup">
              <button
                type="button"
                className="rounded-full bg-blue px-3 py-2 text-sm font-semibold text-white hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Sign Up
              </button>
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="rounded-lg px-3 py-[6px] ring-primary focus:ring-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
