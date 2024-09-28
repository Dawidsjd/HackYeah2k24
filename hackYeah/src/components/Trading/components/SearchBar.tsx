import React from 'react'

const SearchBar = () => {
  return (
    <div className="bg-gray-900 p-4 rounded shadow-md flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full shadow-2xl p-2 border border-gray-800 rounded bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  )
}

export default SearchBar