import React, { useContext, useState } from 'react';
import { assets } from '../assets/assest';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const { searchAndPlay } = useContext(PlayerContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    searchAndPlay(e.target.value);
  };

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      {/* Home Section */}
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div onClick={() => navigate('/')} className='flex items-center  pl-4 gap-2 cursor-pointer'>
          <img className='w-6 mr-17 mb-1' src={assets.home_icon} alt="Home icon" />
          <p className='font-bold mb-1'>Home</p>
        </div>
    

      
        <div className='flex items-center gap-2 ml-1 mt-1'>
          <img className='w-6 ml-3' src={assets.search_icon} alt="Search icon" />
          <input
            type="text"
            className="bg-white text-black  rounded p-2 w-[85%] focus:outline-none"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Your Library Section */}
      <div className='bg-[#121212] h-[70%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-7' src={assets.stack_icon} alt="Library icon" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-6 ' src={assets.arrow_icon} alt="Arrow icon" />
            <img className='w-6 ' src={assets.plus_icon} alt="Plus icon" />
          </div>
        </div>

        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1 className='font-light'>Create Your First Playlist</h1>
          <p>It's easy. We will help you.</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Create Playlist
          </button>
        </div>

        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1 className='font-light'>Let's Find Some Podcasts to follow</h1>
          <p>We'll keep you updated on new episodes.</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
