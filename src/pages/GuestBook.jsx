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
        const res = await fetch("http://tylers-backend.onrender.com/guestbook");
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
      const res = await fetch("http://tylers-backend.onrender.com/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        setMessage("");
        const updated = await fetch("http://tylers-backend.onrender.com/guestbook");
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
    window.location.href = "http://tylers-backend.onrender.com/auth/github";
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <section className="relative flex flex-col justify-start items-center min-h-screen text-white text-center px-4 sm:px-6 md:px-10">
      <video autoPlay loop muted playsInline className="fixed inset-0 z-0 w-full h-full object-cover">
        <source src="/your-background-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0" />

      <div className="relative z-10 w-full max-w-4xl mt-24 p-6 sm:p-10 md:p-12 bg-white/10 border border-white/20 rounded-2xl shadow-2xl backdrop-blur-lg">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-500 text-center mb-4">📖 GuestBook</h1>
        <p className="text-center text-gray-300 text-sm mb-8">Leave a message for Jayprakash</p>

        {isAuthenticated && user ? (
          <>
            <UserHeader user={user} onLogout={logout} />
            <MessageForm message={message} setMessage={setMessage} onSubmit={handleSubmit} />
          </>
        ) : (
          <LoginPrompt showLogin={showLogin} setShowLogin={setShowLogin} loginWithGitHub={loginWithGitHub} />
        )}
      </div>

      <GuestbookEntries entries={entries} formatDate={formatDate} />
    </section>
  );
}
