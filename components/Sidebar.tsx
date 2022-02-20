import React from 'react'
import { HomeIcon, LibraryIcon, SearchIcon } from '@heroicons/react/outline'
export default function Sidebar() {
  return (
   
      <div>
        <button className="flex space-x-2 text-gray-500 hover:text-white">
          <HomeIcon className="h-5 w-5 " />
          <p>Home</p>
        </button>
        <button className="flex space-x-2 text-gray-500 hover:text-white">
          <HomeIcon className="h-5 w-5 " />
          <p>Home</p>
        </button>
        <button className="flex space-x-2 text-gray-500 hover:text-white">
          <HomeIcon className="h-5 w-5 " />
          <p>Home</p>
        </button>
      </div>
    
  )
}
