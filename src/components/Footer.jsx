export default function Footer() {
    return (
        <footer className="relative flex items-center justify-center py-4 text-center text-white transition-colors duration-300">
            <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/30"></div>

            <div className="relative z-10">
                <p className="text-sm md:text-base">
                    Created by <span className="font-semibold text-blue-600">Jayprakash Malik</span>
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-600">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}
