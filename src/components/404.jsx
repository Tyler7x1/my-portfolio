import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-blue-500">404</h1>
            
            <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold">
                Page Not Found
            </p>
            
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-400 max-w-md">
                The page you're looking for doesn't exist or has been moved.
            </p>
            
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 text-sm sm:text-base"
            >
                Go Back Home
            </Link>
        </div>
    );
}
