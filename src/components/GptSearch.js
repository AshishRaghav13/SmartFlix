import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <div>
         <img
          className="absolute -z-10 w-full"
          src="https://t4.ftcdn.net/jpg/05/67/23/37/360_F_567233754_9NSSHQRgPm40l1vzvUvI1ZfP1CLDH3Or.jpg"
          alt="logo"
        />
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;