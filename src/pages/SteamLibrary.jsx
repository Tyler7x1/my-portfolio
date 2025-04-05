import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { ChevronUp, SlidersHorizontal } from 'lucide-react';
import GameGrid from '../components/GameGrid';
import GameModal from '../components/GameModal';
import SearchAndSort from '../components/SearchAndSort';

const CARDS_PER_LOAD = 8;

const SteamLibrary = () => {
  const [games, setGames] = useState([]);
  const [visibleGames, setVisibleGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('az');
  const [hasMore, setHasMore] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://tylers-backend.onrender.com/steam/library');
        const unique = Array.from(new Map(res.data.response?.games?.map(g => [g.appid, g])).values());
        setGames(unique);
        setVisibleGames(unique.slice(0, CARDS_PER_LOAD));
        setHasMore(unique.length > CARDS_PER_LOAD);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  const loadMoreGames = useCallback(() => {
    if (!hasMore || loading) return;
    setLoading(true);
    setTimeout(() => {
      const next = games.slice(visibleGames.length, visibleGames.length + CARDS_PER_LOAD);
      setVisibleGames(prev => [...prev, ...next]);
      setHasMore(visibleGames.length + next.length < games.length);
      setLoading(false);
    }, 500);
  }, [games, visibleGames, hasMore, loading]);

  useEffect(() => {
    const onScroll = () => {
      if (isScrolling) return;
      setIsScrolling(true);

      if (window.scrollY > 200) setShowTopBtn(true);
      else setShowTopBtn(false);

      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 500
      ) loadMoreGames();

      setTimeout(() => setIsScrolling(false), 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [loadMoreGames, isScrolling]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoScroll && !selectedGame) loadMoreGames();
    }, 10000);
    return () => clearInterval(interval);
  }, [autoScroll, selectedGame, loadMoreGames]);

  const filtered = games.filter(g => g.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const sorted = filtered.sort((a, b) => {
    switch (sortType) {
      case 'za': return b.name.localeCompare(a.name);
      case 'playtime': return b.playtime_forever - a.playtime_forever;
      case 'playtimeAsc': return a.playtime_forever - b.playtime_forever;
      default: return a.name.localeCompare(b.name);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-4 sm:px-6 font-sans relative">

  <div className="bg-[#0f2027]/80 backdrop-blur-md">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center sm:text-left">
      <div className="flex items-center gap-3">
        <img
          src="/steam.png"
          alt="Steam Logo"
          className="w-28 h-auto object-contain"
        />
      </div>


          <div className="hidden sm:block">
            <SearchAndSort {...{ searchTerm, setSearchTerm, sortType, setSortType }} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6">
        {sorted.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-xl text-gray-400 mb-2">No games found</div>
            <p className="text-gray-500">Try a different search term</p>
          </div>
        ) : (
          <GameGrid
            games={sorted.slice(0, visibleGames.length)}
            onCardClick={setSelectedGame}
            onHoverStart={() => setAutoScroll(false)}
            onHoverEnd={() => setAutoScroll(true)}
          />
        )}

        {loading && visibleGames.length > 0 && (
          <div className="flex justify-center mt-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#66c0f4]" />
          </div>
        )}

        {selectedGame && (
          <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
        )}
      </div>

      <button
        onClick={() => setShowMobileFilters(prev => !prev)}
        className="fixed bottom-6 left-6 sm:hidden z-50 p-3 rounded-full bg-[#66c0f4] text-[#0f2027] shadow-lg"
      >
        <SlidersHorizontal />
      </button>

      {showMobileFilters && (
        <div className="fixed bottom-20 left-4 right-4 sm:hidden bg-[#1b2838] p-4 rounded-xl z-50 shadow-xl border border-[#66c0f4]">
          <SearchAndSort {...{ searchTerm, setSearchTerm, sortType, setSortType }} />
        </div>
      )}

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#66c0f4] text-[#0f2027] shadow-lg sm:hidden"
        >
          <ChevronUp />
        </button>
      )}
    </section>
  );
};

export default SteamLibrary;
