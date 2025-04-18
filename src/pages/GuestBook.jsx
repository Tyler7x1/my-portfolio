import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import MessageForm from "../components/MessageForm.jsx";
import UserHeader from "../components/UserHeader.jsx";
import LoginPrompt from "../components/LoginPrompt.jsx";
import GuestbookEntries from "../components/GuestBookEntries.jsx";
import { formatDate } from "../components/js/helpers.js";

export default function GuestBook() {
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  const token = localStorage.getItem("token");
  const isAuthenticated = !!token;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");

    if (tokenFromUrl) {
      const decodedToken = decodeURIComponent(tokenFromUrl);
      localStorage.setItem("token", decodedToken);
      window.history.replaceState({}, document.title, "/guestbook");
      window.location.reload();
      return;
    }

    const fetchMessages = async () => {
      try {
        const res = await fetch("https://tylers-backend.onrender.com/guestbook");
        const data = await res.json();
        setEntries(data);
      } catch (err) {
        console.error("Error fetching guestbook messages:", err);
      }
    };

    fetchMessages();

    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser(payload);
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("token");
      }
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      const res = await fetch("https://tylers-backend.onrender.com/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        setMessage("");
        const updated = await fetch("https://tylers-backend.onrender.com/guestbook");
        const data = await updated.json();
        setEntries(data);
      } else {
        console.error("Failed to post message");
      }
    } catch (err) {
      console.error("Error posting message:", err);
    }
  };

  const loginWithGitHub = () => {
    window.location.href = "https://tylers-backend.onrender.com/auth/github";
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <section className="relative flex flex-col justify-start items-center min-h-screen text-white text-center px-4 sm:px-6 md:px-10 bg-gradient-to-br from-black to-blue-900 transition-colors duration-300">
      <div className="w-full max-w-4xl mt-20 sm:mt-24 p-5 sm:p-8 md:p-12 bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-lg">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-center mb-4 text-blue-400">
          📖 GuestBook
        </h1>
        <p className="text-center text-gray-300 text-sm sm:text-base mb-8">
          Leave a message for Jayprakash
        </p>
  
        {isAuthenticated && user ? (
          <>
            <UserHeader user={user} onLogout={logout} />
            <MessageForm message={message} setMessage={setMessage} onSubmit={handleSubmit} />
          </>
        ) : (
          <LoginPrompt showLogin={showLogin} setShowLogin={setShowLogin} loginWithGitHub={loginWithGitHub} />
        )}
      </div>
  
      <div className="w-full max-w-4xl mt-10 px-2 sm:px-4">
        <GuestbookEntries entries={entries} formatDate={formatDate} />
      </div>
    </section>
  );  
}
