import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import MyPlaylists from './MyPlaylists'

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Features Charts</h1>
        <div className='flex overflow-auto m'>
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />   ))}
        </div>
      </div>
      <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Daily hit's</h1>
        <div className='flex overflow-auto m'>
          {songsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />   ))}
        </div>
      </div>
      <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Albums</h1>
        <div className='flex overflow-auto m'>
          <MyPlaylists/>
        </div>
      </div>
      
    </>
  )
}

export default DisplayHome
