export default function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-4 text-center transition-colors duration-300">
            <div className="container mx-auto">
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
