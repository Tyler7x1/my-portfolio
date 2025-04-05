import React from 'react';
import { Search, X } from 'lucide-react';

const SearchAndSort = ({ searchTerm, setSearchTerm, sortType, setSortType }) => (
  <div className="flex gap-4 flex-wrap items-center">
    <div className="relative w-full sm:w-64">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#1b2838]/80 text-white placeholder-gray-400 border border-[#66c0f4]/30 focus:outline-none focus:ring-2 focus:ring-[#66c0f4]/50"
      />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>

    <select
      value={sortType}
      onChange={(e) => setSortType(e.target.value)}
      className="rounded-lg bg-[#1b2838]/80 text-white px-4 py-2 border border-[#66c0f4]/30 focus:outline-none focus:ring-2 focus:ring-[#66c0f4]/50"
    >
      <option value="az">Sort: A - Z</option>
      <option value="za">Sort: Z - A</option>
      <option value="playtime">Sort: Playtime ↓</option>
      <option value="playtimeAsc">Sort: Playtime ↑</option>
    </select>
  </div>
);

export default SearchAndSort;
