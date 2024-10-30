import React, { useContext } from 'react';
import { assets} from '../assets/assest';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const {track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong}=useContext(PlayerContext);
  return (
  
    
      <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
       
        <div className='hidden lg:flex items-center gap-4'>
          <img className='w-12' src={track.image} alt="" />
          <div>
            <p>{track.name}</p>
            <p>{track.desc}</p>
          </div>
        </div>

       
        <div className='flex flex-col items-center gap-1 m-auto'>
          <div className='flex gap-4'>
            <img className='w-5 cursor-pointer ' src={assets.shuffle_icon} alt="Shuffle" />
            <img onClick={previous}className='w-6 cursor-pointer ' src={assets.arrowleft_icon} alt="Shuffle" />
            {playStatus
            ?<img  onClick={pause}className='w-5 cursor-pointer ' src={assets.pause_icon} alt="Pause" />
            :<img onClick={play} className='w-5 cursor-pointer' src={assets.play_icon} alt="Play" />
             }
            <img onClick={next} className='w-5 cursor-pointer' src={assets.arrowright_icon} alt="Next" />
            <img className='w-5 cursor-pointer' src={assets.timer_icon} alt="Loop" />
          </div>
          <div className='flex items-center gap-5'>
            <p>
              {time.currentTime.minute}:{time.currentTime.second}
            </p>
            <div onClick={seekSong} ref={seekBg}className='w-[50vw] max-w-400px bg-gray-300 rounded-full cursor-pointer'>
              <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
            </div>
            <p> {time.totalTime.minute}:{time.totalTime.second}</p>
             
          </div>
        </div>
        {/* <div className='hidden lg:flex items-center gap-2 opacity-75'>
          <img className='bg-white w-4' src={assets.play_icon} alt=""/>
          <img className='bg-white w-4' src={assets.mic_icon} alt=""/>
          <img className='bg-white w-4' src={assets.queue_icon} alt=""/>
          <img className='bg-white w-4' src={assets.speaker_icon} alt=""/>
          <img className='bg-white w-4' src={assets.volume_icon} alt=""/>
          <div className='w-20 bg-slate-50 h-1 rounded'>

          </div>
          <img className='bg-white w-4' src={assets.miniplayer_icon} alt=""/>
        </div> */}
      </div>

  );
};

export default Player;
