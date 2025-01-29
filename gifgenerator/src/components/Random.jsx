/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner'; 

const API_KEY = '6xJcR9DB1P1F5NvGJfLUJHFuHDedAJjt';

const Random = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    try {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
      const { data } = await axios.get(url);
      
      // Fix: Use optional chaining to prevent errors
      const imageSource = data.data?.images?.downsized_large?.url;
      console.log(imageSource)
      if (imageSource) {
        setGif(imageSource);
      } else {
        console.error("No valid image found in API response.");
      }
    } catch (error) {
      console.error("Error fetching GIF:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className='w-1/2 bg-green-300 rounded-lg border border-black flex flex-col gap-y-5 items-center mt-[15px]'>
      <h1 className='mt-2 text-2xl underline uppercase font-bold'>Random GIF</h1>

      {loading ? (
        <Spinner /> 
      ) : (
        gif && <img src={gif} width="450px" className='max-h-[450px]' alt="Random GIF" />
      )}

      <button 
        className='mb-5 cursor-pointer w-10/12 h-auto bg-blue-100 text-lg py-2 rounded-lg'
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
