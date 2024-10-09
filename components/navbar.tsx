"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Sun,
  Moon,
  Home,
  Info,
  Phone,
  Book,
  User,
  LogIn,
  X,
} from "lucide-react";
import Logo from "./logo";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Phone },
  { name: "FAQ", href: "/faq", icon: Book },
];

const navBottomLinks = [
  { name: "Login", href: "/login", icon: LogIn },
  { name: "Register", href: "/register", icon: User },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (mounted) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden sm:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>

          <Logo />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block md:hidden p-2 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden sm:block py-2 px-4 rounded-full bg-teal-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
            onClick={toggleMenu}
          >
            Daftar
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-full sm:w-[400px] h-full bg-white dark:bg-gray-900 shadow-lg z-50"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl font-bold border-b-2 border-teal-600">
                  Menu
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-teal-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>
              <div className="flex-grow">
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center text-lg font-medium hover:underline rounded-md p-2 transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      <link.icon className="mr-2 h-5 w-5" /> {link.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="border-t border-teal-600 pt-4 mt-4">
                <div className="space-y-4">
                  {navBottomLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center text-lg font-medium hover:underline rounded-md p-2 transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      <link.icon className="mr-2 h-5 w-5" /> {link.name}
                    </a>
                  ))}
                  <button
                    onClick={toggleTheme}
                    className="flex items-center text-lg font-medium hover:underline rounded-md p-2 transition-colors w-full"
                  >
                    {mounted && theme === "dark" ? (
                      <>
                        <Sun className="mr-2 h-5 w-5" /> Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="mr-2 h-5 w-5" /> Dark Mode
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
