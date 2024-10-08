"use client"
import Link from "next/link";
import { useState } from "react";
import Styles from './page.module.css'; // Import your CSS module

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-20 bg-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className={Styles.logo}>CoherentSystems</div>

          {/* Hamburger Icon */}
          <div className="md:hidden text-white" onClick={toggleMenu}>
            <button>
              {/* Hamburger Icon (3 lines) */}
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>

          {/* Navbar Links (hidden on mobile, visible on medium screens and above) */}
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              <Link href="/">
                <p className={Styles.aboutLink}>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className={Styles.aboutLink}>About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/papers">
                <p className={Styles.aboutLink}>Paper</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu (visible on mobile screens) */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 text-white mt-2">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/" onClick={toggleMenu}>
                  <p className={Styles.aboutLink}>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={toggleMenu}>
                <p className={Styles.aboutLink}>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/papers" onClick={toggleMenu}>
                <p className={Styles.aboutLink}>Paper</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
