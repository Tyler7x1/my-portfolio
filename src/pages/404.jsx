import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="relative flex flex-col justify-center items-center min-h-screen text-white text-center px-4 sm:px-6 md:px-10 transition-colors duration-300">
            <div className="absolute inset-0 backdrop-blur-lg bg-gradient-to-br from-black to-blue-900"></div>

            <div className="relative z-10 w-full max-w-3xl p-6 sm:p-10 md:p-12 bg-gray-900/50 rounded-2xl shadow-2xl backdrop-blur-lg flex flex-col items-center space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-blue-500">
                    404
                </h1>

                <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    Page Not Found
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="mt-4 px-6 py-3 bg-blue-500/40 hover:bg-blue-600/50 backdrop-blur-md text-white font-semibold rounded-xl shadow-md transition duration-300"
                >
                    Go Back Home
                </Link>
            </div>
        </section>
    );
}
