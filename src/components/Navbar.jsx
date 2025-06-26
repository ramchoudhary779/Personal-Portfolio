import React from "react";
import { navLinks } from "../constants/index";
import { motion } from "framer-motion";
import { hoverEffect } from "../utils/motion";
import logo from "../assets/logo.jpg"


const Navbar = () => {

  return (
    <motion.nav
      className="w-full flex justify-between items-center px-6 py-4 fixed top-0 z-50 text-2xl text-white bg-slate-900 shadow-2xl shadow-amber-100"
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
        className="h-14 w-30 object-contain" />
      </motion.div>

     
      <div className="flex items-center gap-6">
        <ul className="flex gap-6">
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
      </div>
    </motion.nav>
  );
};

export default Navbar;
