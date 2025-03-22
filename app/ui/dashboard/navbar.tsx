"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Styles from './page.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/"; // `/` なら true, それ以外は false

  return (
    <>
      {/* ナビバー */}
      <div className={`top-0 left-0 w-full h-20 z-50 transition-all duration-300 
        ${isHome ? "absolute bg-transparent text-white" : "fixed bg-gray-800 text-white shadow-md"}`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full relative">
            <div className={Styles.logo}>CoherentSystems</div>

            {/* Hamburger Icon */}
            <div className={"md:hidden text-white"} onClick={() => setIsOpen(!isOpen)}>
              <button>
                <div className="w-6 h-0.5 bg-current mb-1"></div>
                <div className="w-6 h-0.5 bg-current mb-1"></div>
                <div className="w-6 h-0.5 bg-current"></div>
              </button>
            </div>

            {/* Navbar Links */}
            <ul className={"hidden md:flex gap-x-6"}>
              <li><Link href="/"><p className={Styles.aboutLink}>Home</p></Link></li>
              <li><Link href="/about"><p className={Styles.aboutLink}>About Us</p></Link></li>
              <li><Link href="/papers"><p className={Styles.aboutLink}>Paper</p></Link></li>
            </ul>

            {/* Mobile Menu */}
            {isOpen && (
              <div className={"absolute top-full right-0 bg-gray-800 text-white mt-2 p-4 rounded-lg shadow-lg w-48 transition-all duration-300"}>
                <ul className="flex flex-col space-y-2 items-center">
                  <li><Link href="/" onClick={() => setIsOpen(false)}><p className={Styles.aboutLink}>Home</p></Link></li>
                  <li><Link href="/about" onClick={() => setIsOpen(false)}><p className={Styles.aboutLink}>About Us</p></Link></li>
                  <li><Link href="/papers" onClick={() => setIsOpen(false)}><p className={Styles.aboutLink}>Paper</p></Link></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 他のページではナビバーの高さ分の余白を確保 */}
      {!isHome && <div className="h-20"></div>}
    </>
  );
};

export default Navbar;
