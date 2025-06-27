import React, { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants/index";
import logo from "../assets/logo.jpg";
import { hoverEffect } from "../utils/motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Nav */}
      <motion.nav
        className="w-full flex justify-between items-center px-6 py-4 fixed top-0 z-50 text-2xl text-white bg-slate-900 shadow-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={logo}
            alt="logo"
            className="h-14 w-30 object-contain"
          />
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              className="cursor-pointer font-medium"
              whileHover={hoverEffect}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="text-white text-3xl">&#9776;</span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-4 py-4 bg-slate-800 text-white w-full md:hidden fixed top-20 left-0 z-40"
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)} // close on click
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default Navbar;
