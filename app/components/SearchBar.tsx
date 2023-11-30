// SearchBar.tsx

"use client"
import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="flex justify-end">
      <div className="flex items-center max-w-lg p-2 bg-white border border-gray-300 rounded-md hover:shadow-md">
        <svg className="w-5 h-5 text-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
        </svg>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="flex-1 outline-none border-none"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
