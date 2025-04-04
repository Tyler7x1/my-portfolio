export default function Footer() {
    return (
        <footer className="relative flex items-center justify-center py-4 text-center text-white dark:text-gray-900 transition-colors duration-300">
            {/* Blurred Glass Background */}
            <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/30 dark:bg-gray-900/30"></div>

            {/* Content */}
            <div className="relative z-10">
                <p className="text-sm md:text-base">
                    Created by <span className="font-semibold text-blue-400 dark:text-blue-600">Jayprakash Malik</span>
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-600">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}
