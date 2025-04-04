import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-4 bg-black">
            <h1 className="text-6xl font-extrabold text-blue-500">404</h1>
            <p className="mt-4 text-2xl font-semibold">Page Not Found</p>
            <p className="mt-2 text-gray-400">The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
}
