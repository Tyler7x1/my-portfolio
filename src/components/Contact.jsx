import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const response = await fetch("https://your-backend.onrender.com/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            className="relative flex flex-col justify-center items-center min-h-screen text-white text-center px-6 transition-colors duration-300"
        >
            {/* Blurred Glass Background */}
            <div className="absolute inset-0 backdrop-blur-lg bg-gray-900/30 dark:bg-gray-900/30"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-lg p-8 bg-gray-900/50 dark:bg-white/50 rounded-lg shadow-lg backdrop-blur-lg">
                <h2 className="text-3xl font-bold text-blue-400 dark:text-blue-600">Let's Connect</h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 focus:outline-none focus:ring focus:ring-blue-400"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 focus:outline-none focus:ring focus:ring-blue-400"
                        required
                    />
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 focus:outline-none focus:ring focus:ring-blue-400"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-500/50 dark:bg-blue-600/50 backdrop-blur-lg text-white font-bold py-3 rounded transition duration-300 hover:bg-blue-600/50 dark:hover:bg-blue-500/50"
                        disabled={status === "sending"}
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>

                </form>

                {status === "success" && <p className="text-green-400 text-center mt-4">Message sent successfully!</p>}
                {status === "error" && <p className="text-red-400 text-center mt-4">Failed to send message.</p>}
            </div>

            {/* Social Links Section */}
            <div className="relative z-10 mt-8 flex space-x-6">
                <a href="https://github.com/Tyler7x1" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition text-2xl">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/jayprakash-malik/" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition text-2xl">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </section>
    );
}
