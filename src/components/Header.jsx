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
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <nav className="navbar relative flex items-center 
                bg-gray-800/50 backdrop-blur-md 
                text-white px-6 py-3 
                rounded-full shadow-lg border border-gray-700/40 
                transition-colors duration-300"
            >
                <ul className="relative flex space-x-6 text-sm font-medium">
                    {["home", "about", "projects", "contact"].map((item, index) => (
                        <li key={index} className="relative">
                            <Link
                                to={item === "home" ? "/" : `/${item}`}
                                className={`px-6 py-2 rounded-full transition backdrop-blur-lg 
                                    font-bold ${
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
