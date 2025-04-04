import { useState } from "react";
import "../css/navbar.css"; // Import the updated CSS file

export default function Header() {
    const [active, setActive] = useState("home");

    return (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <nav className="navbar relative flex items-center 
                bg-gray-800/50 dark:bg-gray-200/50 backdrop-blur-md 
                text-white dark:text-gray-900 px-6 py-3 
                rounded-full shadow-lg border border-gray-700/40 dark:border-gray-300/40 
                transition-colors duration-300"
            >
                {/* Navigation Links */}
                <ul className="relative flex space-x-6 text-sm font-medium">
                    {["home", "about", "projects", "contact"].map((item, index) => (
                        <li key={index} className="relative">
                            <a
                                href={`#${item}`}
                                onClick={() => setActive(item)}
                                className={`px-6 py-2 rounded-full transition backdrop-blur-lg 
                                    font-bold ${
                                    active === item 
                                        ? "bg-blue-500/60 dark:bg-blue-600/60 text-white shadow-md"
                                        : "hover:text-blue-400 dark:hover:text-blue-600"
                                }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
