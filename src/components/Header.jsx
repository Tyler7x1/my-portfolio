import "../css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const location = useLocation();
    const [active, setActive] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const path = location.pathname === "/" ? "home" : location.pathname.slice(1);
        setActive(path);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const navItems = ["home", "about", "projects", "guestbook", "terminal", "contact"];

    return (
        <>
            <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 hidden md:block">
                <nav
                    className="navbar mx-auto max-w-max flex items-center justify-center 
                    bg-gray-900/80 backdrop-blur-md text-white px-4 py-2 
                    rounded-full shadow-lg border border-gray-700/50 transition-all duration-300"
                >
                    <ul className="flex justify-center items-center gap-3 sm:gap-5 text-xs sm:text-sm md:text-base font-semibold">
                        {navItems.map((item, index) => (
                            <li key={index} className="min-w-[90px] flex items-center justify-center text-center">
                                <Link
                                    to={item === "home" ? "/" : `/${item}`}
                                    className={`block w-full px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base font-bold
                                        ${active === item
                                            ? "bg-blue-500 text-white shadow-lg"
                                            : "hover:text-blue-400 hover:bg-gray-700/50"
                                        }`}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <div className="fixed top-4 left-4 z-50 md:hidden">
                <button
                    className="text-white bg-gray-900/80 p-2 rounded-full border border-gray-700/50 backdrop-blur-md shadow-lg"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ x: -250, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -250, opacity: 0 }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-16 left-4 z-40 bg-gray-900/90 backdrop-blur-md border border-gray-700/50 
                            rounded-xl shadow-lg py-4 px-6 text-white w-48 md:hidden"
                    >
                        <ul className="flex flex-col gap-3 text-sm font-semibold">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item === "home" ? "/" : `/${item}`}
                                        className={`block w-full px-2 py-2 rounded-md transition duration-200
                                            ${active === item
                                                ? "bg-blue-500 text-white"
                                                : "hover:text-blue-400 hover:bg-gray-700/50"
                                            }`}
                                    >
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
