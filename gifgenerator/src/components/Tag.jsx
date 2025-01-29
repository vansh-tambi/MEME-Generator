/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiSearch } from "react-icons/ci";

const API_KEY = '6xJcR9DB1P1F5NvGJfLUJHFuHDedAJjt';

const Tag = () => {
  const [gif, setGif] = useState('');
  const [tag, setTag] = useState('car');

  async function fetchData() {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${tag}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
      const { data } = await axios.get(url);

      // Fix: Access first GIF properly
      const imageSource = data.data[0]?.images.fixed_height.url;
      console.log(imageSource)
      if (imageSource) {
        setGif(imageSource);
      }
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className='w-1/2 bg-blue-300 rounded-lg border border-black flex flex-col gap-y-5 items-center mt-[15px] mb-10'>
      <h1 className='mt-2 text-2xl underline uppercase font-bold'>Search GIF</h1>
      {gif && <img src={gif} width="450px" alt="GIF" />}
      
      <div className='flex w-10/12 justify-center relative'>
        <input
          type='text'
          className='w-full h bg-blue-200 text-lg py-2 rounded-lg text-center'
          placeholder='Search Meme'
          onChange={(event) => setTag(event.target.value)}
        />
      </div>

      <button 
        className='relative mx-auto mb-5 cursor-pointer w-10/12 h bg-blue-100 text-lg py-2 rounded-lg flex items-center justify-center'
        onClick={clickHandler}
      >
        Search <CiSearch className='text-xl font-bold ml-2' />
      </button>
    </div>
  );
}

export default Tag;
