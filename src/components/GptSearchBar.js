import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langKey = useSelector((store)=>store.config.lang)

  return (
    <div className='pt-[12%] flex justify-center'>
        <form className='bg-gradient-to-l from-red-600 w-1/2 p-8 grid grid-cols-12'>
           <input type="text"  className=" border border-solid  col-span-9 rounded-md px-2 py-4 " placeholder={lang[langKey].gptSearchPlaceholder} />
           <button className=' col-span-3 mx-2 hover:scale-95 bg-green-200 text-black font-bold rounded-lg'>{lang[langKey].Search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;