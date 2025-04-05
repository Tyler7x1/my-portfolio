import React, { useEffect, useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const Steam = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const getStatusText = (state) => {
    switch (state) {
      case 0: return 'Offline';
      case 1: return 'Online';
      case 2: return 'Busy';
      case 3: return 'Away';
      case 4: return 'Snooze';
      case 5:
      case 6: return 'Looking to Play/Trade';
      default: return 'Unknown';
    }
  };

  const getStatusColor = (state) => {
    switch (state) {
      case 1: return 'text-green-400';
      case 2: return 'text-red-400';
      case 3: return 'text-yellow-400';
      case 4: return 'text-blue-400';
      case 5:
      case 6: return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const timeAgo = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp * 1000) / 1000);
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 },
    ];
    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count > 0) {
        return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
      }
    }
    return 'just now';
  };

  const timeOnline = (lastlogoff) => {
    const seconds = Math.floor((Date.now() - lastlogoff * 1000) / 1000);
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${mins}m`;
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://tylers-backend.onrender.com/steam');
        setProfile(response.data);
      } catch (err) {
        console.error('Error fetching Steam profile:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
    const interval = setInterval(fetchProfile, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0f2027]">
        <ClipLoader color="#66c0f4" size={50} />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center text-white bg-[#0f2027] h-screen flex items-center justify-center">
        <p>Could not load Steam profile.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-20 px-4 sm:px-6 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-sans flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-[#1b2838] border border-[#66c0f4]/40 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-xl w-full max-w-lg text-center transform hover:scale-[1.02] transition duration-300"
      >
        <img
          src={profile.avatarfull}
          alt={profile.personaname}
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 border-4 border-[#66c0f4] shadow-md"
        />

        <h2 className="text-2xl sm:text-3xl font-bold mb-1">{profile.personaname}</h2>

        <p className={`mb-1 font-medium ${getStatusColor(profile.personastate)}`}>
          ● {getStatusText(profile.personastate)}
        </p>

        <p className="text-sm text-gray-400 mb-4">
          {profile.personastate === 0
            ? `Last seen ${timeAgo(profile.lastlogoff)}`
            : `Online since ${timeOnline(profile.lastlogoff)}`}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          <a
            href={profile.profileurl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 bg-[#66c0f4] hover:bg-[#549dcf] text-[#0f2027] font-semibold rounded-xl transition duration-200"
          >
            View Steam Profile
          </a>

          <Link
            to="/steam/library"
            className="inline-block px-6 py-2.5 bg-[#66c0f4] hover:bg-[#549dcf] text-[#0f2027] font-semibold rounded-xl transition duration-200"
          >
            View Steam Library
          </Link>
        </div>

        {profile.timecreated && (
          <p className="text-sm text-gray-500 mt-4">
            🎮 Joined: {new Date(profile.timecreated * 1000).toLocaleDateString()}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default Steam;
