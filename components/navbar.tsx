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
import { Button } from "./ui/button";

const navLinks = [
  { name: "Beranda", href: "/", icon: Home },
  { name: "Tentang", href: "/about", icon: Info },
  { name: "Kontak", href: "/contact", icon: Phone },
  { name: "FAQ", href: "/faq", icon: Book },
];

const navBottomLinks = [
  {
    name: "SIMS",
    href: "https://sims.mbi-au.sch.id/login.php",
    icon: LogIn,
  },
  {
    name: "Daftar",
    href: "https://sims.mbi-au.sch.id/psb/psb.php",
    icon: User,
  },
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
    <nav className="sticky top-0 z-50 w-full bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block"
          >
            <Button onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </motion.div>
          <Logo />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block sm:hidden"
          >
            <Button onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block"
          >
            <Button size="lg">
              <a href="http://sims.mbi-au.sch.id/psb/psb.php">Daftar</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed top-0 left-0 w-full sm:w-[400px] h-full bg-neutral-100 dark:bg-neutral-900 shadow-lg z-50"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl font-bold border-b-2 border-emerald-600">
                  Menu
                </span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <Button>
                    <X className="h-6 w-6" />
                  </Button>
                </motion.div>
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
              <div className="border-t border-emerald-600 pt-4 mt-4">
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
