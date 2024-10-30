import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assest'
import AlbumItem from './AlbumItem'
import { songsData,songsData1} from '../assets/assest'
import SongItem from './SongItem'
const DisplayHome = () => {
  return (
    <>
    <Navbar/>
    <div className='mb-4'>
      <h1 className='my-5 ml-4 font-bold text-3xl'>Featured Charts</h1>
      <div className='flex overflow-auto '>
      {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
      </div>

    </div>
    <div className='mb-5'>
      <h1 className='ml-4 mb-4 my-2 font-bold text-3xl'>Recents</h1>
      <div className='flex overflow-auto '>
      {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
      </div>
      </div>
    <div className='mb-5'>
      <h1 className='ml-4 mb-4 my-2 font-bold text-3xl'>Anirudh Hits</h1>
      <div className='flex overflow-auto '>
      {songsData1.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
      </div>
      
      

    </div>
    </>


  )
}

export default DisplayHome