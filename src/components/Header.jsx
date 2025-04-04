import "../css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
    const location = useLocation();
    const [active, setActive] = useState("home");

    useEffect(() => {
        const path = location.pathname === "/" ? "home" : location.pathname.slice(1);
        setActive(path);
    }, [location]);

    return (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 sm:px-0">
            <nav
                className="navbar mx-auto max-w-fit sm:max-w-max flex flex-wrap items-center justify-center 
                bg-gray-900/80 backdrop-blur-md text-white px-5 sm:px-8 py-2 sm:py-3 
                rounded-full shadow-lg border border-gray-700/50 transition-all duration-300"
            >
                <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-7 text-sm sm:text-base md:text-lg font-semibold">
                    {["home", "about", "projects", "contact"].map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item === "home" ? "/" : `/${item}`}
                                className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300
                                    font-bold whitespace-nowrap tracking-wide ${
                                    active === item
                                        ? "bg-blue-500 text-white shadow-lg scale-105"
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
    );
}
