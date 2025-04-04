import '../css/navbar.css';
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
            <nav className="navbar mx-auto max-w-fit sm:max-w-max flex flex-wrap items-center justify-center
                bg-gray-800/50 backdrop-blur-md text-white px-4 sm:px-6 py-2 sm:py-3 
                rounded-full shadow-lg border border-gray-700/40 transition-colors duration-300"
            >
                <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base font-medium">
                    {["home", "about", "projects", "contact"].map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item === "home" ? "/" : `/${item}`}
                                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition backdrop-blur-lg 
                                    font-bold whitespace-nowrap ${
                                    active === item 
                                        ? "bg-blue-500/60 text-white shadow-md"
                                        : "hover:text-blue-400"
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
