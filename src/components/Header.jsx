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
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
            <nav
                className="navbar mx-auto max-w-max flex items-center justify-center 
                bg-gray-900/80 backdrop-blur-md text-white px-4 py-2 
                rounded-full shadow-lg border border-gray-700/50 transition-all duration-300"
            >
                <ul className="flex justify-center items-center gap-3 sm:gap-5 text-xs sm:text-sm md:text-base font-semibold">
                    {["home", "about", "projects", "terminal", "contact"].map((item, index) => (
                        <li
                            key={index}
                            className="min-w-[90px] flex items-center justify-center text-center"
                        >
                            <Link
                                to={item === "home" ? "/" : `/${item}`}
                                className={`block w-full px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base font-bold
                                    ${
                                        active === item
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
    );
}
