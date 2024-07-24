import React from 'react';
import  { useContext } from 'react';  
import { PlayerContext } from '../context/PlayerContext';  

const SongItem = ({ name, image, desc, id }) => {  
  
   const { playWithId } = useContext(PlayerContext);  

   return (  
      <div  onClick={() => playWithId(id)} className='flex flex-col min-w-[180px] bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer p-2 px-3 hover:bg-[#ffffff26] m-1'>  
         <img className='rounded' src={image} alt="" />  
         <p className='mt-4 font-semibold text-lg text-white truncate'>{name}</p>  
         <p className='text-slate-200 text-sm'>{desc}</p>  
      </div>  
   );  
};  

export default SongItem;
