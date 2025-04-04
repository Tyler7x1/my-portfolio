export default function Footer() {
    return (
        <footer className="relative flex flex-col items-center justify-center py-6 px-4 text-center text-white transition-colors duration-300">
            <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/30"></div>

            <div className="relative z-10 max-w-md w-full">
                <p className="text-sm sm:text-base">
                    Created by <a href="https://github.com/Tyler7x1"><span className="font-semibold text-blue-600">Jayprakash Malik</span></a>
                </p>
                <p className="mt-1 text-xs sm:text-sm text-gray-400 dark:text-gray-600">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}
