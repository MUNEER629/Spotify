import React from 'react'
import { assets } from '../assets/assest'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
<div className='flex items-center gap-2'>
<img onClick={()=>navigate(-1)} className='w-10 bg-black p-2 rounded-2xl cursor-pointer' src={assets.leftarrow_icon} alt=""/>
<img onClick={()=>navigate(+1)}className='w-10  bg-black p-2 rounded-2xl cursor-pointer' src={assets.rightarrow_icon} alt=""/>
</div>
<div className='flex items-center gap-4'>
    <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer'>Explore Premium</p>
    <p className='bg-black py-1 px-3 rounded-2xl text-[18px] cursor-pointer'>Install App</p>
    <p className='bg-green-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>M</p>
</div>
        </div>
        <div className='flex items-center gap-2 mt-4'>
          <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>
            All
          </p>
          <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
          <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
        </div>
        </>
  )
}

export default Navbar