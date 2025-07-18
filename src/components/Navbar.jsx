import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      to: "hero",
      offset: -70,
      icon: Home,
      description: "Welcome & Hero",
    },
    {
      name: "About",
      to: "about",
      offset: -70,
      icon: User,
      description: "Our Story & Team",
    },
    {
      name: "Projects",
      to: "projects",
      offset: -70,
      icon: Briefcase,
      description: "Portfolio & Work",
    },
    // {
    //   name: "Projects",
    //   to: "projects",
    //   offset: -70,
    //   icon: Briefcase,
    //   description: "Portfolio & Work",
    // },
  ];

  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.05,
      rotate: [0, -2, 2, 0],
      transition: {
        duration: 0.6,
        rotate: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        },
      },
    },
  };

  const navItemVariants = {
    initial: { y: 0, scale: 1 },
    hover: {
      y: -2,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1,
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-white/20 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl  border-white/20 dark:border-gray-700/30 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <NavLink
              to="/"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer group"
            >
              <motion.div
                variants={logoVariants}
                initial="initial"
                 whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2"
              >
                <div className="relative">
                  {/* Animated background glow */}
                  <motion.div
                    variants={glowVariants}
                    initial="initial"
                    whileHover="hover"
                    className="absolute -inset-2 bg-gradient-to-r from-primary-500 via-accent-500 to-gold-500 rounded-2xl blur-lg opacity-30"
                  />

                  {/* Main logo container */}
                  <div className="relative w-12 h-12  rounded-xl flex items-center justify-center shadow-xl overflow-hidden">
                    {/* Animated background pattern */}
                    {/* <motion.div
                      animate={{
                        background: [
                          "linear-gradient(45deg, #1F1F1F, #D4AF37)", // Charcoal black to rich gold
                          "linear-gradient(45deg, #D4AF37, #EAE7DC)", // Gold to off-white/ivory
                          "linear-gradient(45deg, #EAE7DC, #1F1F1F)", // Ivory to black
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0"
                    /> */}

                    {/* Logo text */}
                    <motion.span
                      className="relative  text-gray-400 dark:text-yellow-400 font-bold text-xl z-10"
                      animate={{
                        textShadow: [
                          "0 0 10px rgba(255,255,255,0.5)",
                          "0 0 20px rgba(255,255,255,0.8)",
                          "0 0 10px rgba(255,255,255,0.5)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      SM
                    </motion.span>

                    {/* Sparkle effect */}
                    {/* <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: { duration: 2, repeat: Infinity },
                      }}
                      className="absolute top-1 right-1"
                    >
                      <Sparkles size={8} className="text-white/70" />
                    </motion.div> */}
                  </div>
                </div>

                <div className="relative">
                  <motion.h1
                    className="font-serif text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-200 via-accent-300 to-gold-300 dark:from-amber-100 dark:via-amber-300 dark:to-yellow-400 bg-clip-text text-transparent"

                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Studio Maanikh
                  </motion.h1>
                  <motion.p
                    className="text-xs text-slate-300 dark:text-white font-extrabold tracking-wider uppercase"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Interior Design Studio
                  </motion.p>
                </div>
              </motion.div>
            </NavLink>

            {/* Enhanced Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.to;
                const isHovered = hoveredItem === item.name;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="relative"
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={item.offset}
                      duration={500}
                      onSetActive={() => setActiveSection(item.to)}
                      className="block"
                    >
                      <motion.div
                        variants={navItemVariants}
                        initial="initial"
                        whileHover="hover"
                        onHoverStart={() => setHoveredItem(item.name)}
                        onHoverEnd={() => setHoveredItem(null)}
                        className={`relative  px-3 py-2 mx-1  rounded-2xl font-medium transition-all duration-500 cursor-pointer group flex items-center  text-black space-x-3 ${
                          isActive
                            ? "bg-gradient-to-r from-amber-200 to-yellow-500  "
                            : "text-slate-300 dark:text-gray-300 hover:text-white"
                        }`}
                      >
                        {/* Animated background for non-active items */}
                        {!isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              scale: isHovered ? 1 : 0.8,
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-gold-500/20 rounded-2xl backdrop-blur-sm"
                          />
                        )}

                        {/* Glow effect for active item */}
                        {isActive && (
                          <motion.div
                            animate={{
                              boxShadow: [
                                "0 0 20px rgba(179, 144, 106, 0.5)",
                                "0 0 40px rgba(94, 127, 110, 0.7)",
                                "0 0 20px rgba(203, 143, 54, 0.5)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-2xl"
                          />
                        )}

                        {/* Icon with animation */}
                        <motion.div
                          animate={
                            isActive
                              ? {
                                  rotate: [0, 10, -10, 0],
                                  scale: [1, 1.1, 1],
                                }
                              : {}
                          }
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent size={18} className="relative z-10" />
                        </motion.div>

                        <span className="relative z-10 font-semibold">
                          {item.name}
                        </span>

                        {/* Hover tooltip */}
                        <AnimatePresence>
                          {isHovered && !isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.8 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg shadow-xl whitespace-nowrap z-50"
                            >
                              {item.description}
                              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45"></div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Enhanced Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="ml-6 pl-6 border-l border-gray-300/50 dark:border-gray-600/50"
              >
                <ThemeToggle />
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={toggleMenu}
                className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 shadow-lg overflow-hidden"
                aria-label="Toggle menu"
              >
                {/* Animated background */}
                <motion.div
                  animate={
                    isOpen
                      ? { scale: 1.2, opacity: 0.8 }
                      : { scale: 1, opacity: 0.3 }
                  }
                  className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500"
                />

                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <X size={22} className="text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
              onClick={toggleMenu}
            />

            {/* Enhanced Mobile Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden border-l border-white/20 dark:border-gray-700/30"
            >
              <div className="flex flex-col h-full">
                {/* Enhanced Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-primary-50/50 to-accent-50/50 dark:from-primary-900/20 dark:to-accent-900/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <div>
                      <h2 className="font-serif text-lg font-bold text-primary-800 dark:text-primary-200">
                        Studio Maanikh
                      </h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Interior Design Studio
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMenu}
                    className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 shadow-md"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Enhanced Mobile Navigation */}
                <div className="flex-1 py-8 overflow-y-auto">
                  <nav className="space-y-3 px-6">
                    {navItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <Link
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={item.offset}
                            duration={500}
                            className="block"
                            onClick={toggleMenu}
                          >
                            <motion.div
                              whileHover={{ scale: 1.02, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                              className="flex items-center space-x-4 py-4 px-4 rounded-2xl text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary-50 hover:via-accent-50 hover:to-gold-50 dark:hover:from-primary-900/30 dark:hover:via-accent-900/30 dark:hover:to-gold-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 cursor-pointer group border border-transparent hover:border-primary-200/50 dark:hover:border-primary-700/50"
                            >
                              <motion.div
                                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-accent-600 group-hover:text-white transition-all duration-300 shadow-md"
                                whileHover={{ rotate: 5 }}
                              >
                                <IconComponent size={20} />
                              </motion.div>
                              <div className="flex-1">
                                <span className="font-semibold text-lg block">
                                  {item.name}
                                </span>
                                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary-600/70 dark:group-hover:text-primary-400/70">
                                  {item.description}
                                </p>
                              </div>
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronDown
                                  size={16}
                                  className="rotate-[-90deg] text-gray-400"
                                />
                              </motion.div>
                            </motion.div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>
                </div>

                {/* Enhanced Mobile Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-gray-50/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/50"
                >
                  <div className="text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Creating Beautiful Spaces Since 2019
                    </p>
                    <div className="flex justify-center space-x-3">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                          className={`w-3 h-3 rounded-full ${
                            i === 0
                              ? "bg-primary-400"
                              : i === 1
                              ? "bg-accent-400"
                              : "bg-gold-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
