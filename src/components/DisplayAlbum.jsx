import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assest';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams(); 
    const albumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext);
    let filteredSongs = [];
    if (id === '0') {
        filteredSongs = songsData.filter(song => [0, 1,6,10,11].includes(song.id));
    } else if (id === '1') {
        filteredSongs = songsData.filter(song => [0,1,10,12,13,14].includes(song.id));
    } 
     else if (id === '2') {
        filteredSongs = songsData.filter(song => [0,2,5,6,7,10,15].includes(song.id));
    
    }
else if (id === '3') {
   filteredSongs = songsData.filter(song => [12,10,6,0,14,16,17].includes(song.id));

}
else if (id === '4') {
    filteredSongs = songsData.filter(song => [7,9,15,19,18].includes(song.id));
 
 }else {
        filteredSongs = songsData; 
    }

    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt="" />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <div className="flex items-center gap-2 mt-4">
                        <img className='inline block w-5' src={assets.spotify_icon} alt="" />
                        <b>Spotify</b>
                        <span>* 52,555 saves</span>
                        <span>* 1hr 35 min</span>
                    </div>
                </div>
            </div>
          
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className=' m-auto w-5' src={assets.timer_icon} alt="Clock" />
            </div>

            <hr className='border-[#a7a7a7]' />

            <div>
                {
                    filteredSongs.map((item, index) => (
                        <div onClick={() => playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer p-2'>
                            <div className='flex items-center'>
                                <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                                <img className='inline w-10 mr-5' src={item.image} alt={item.name} />
                                <p className='text-white'>{item.name}</p>
                            </div>
                            <p className='text-[15px]'>{albumData.name}</p>
                            <p className='text-[15px] hidden sm:block'>5 days ago</p>
                            <p className='text-[15px] text-center'>{item.duration}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default DisplayAlbum;
