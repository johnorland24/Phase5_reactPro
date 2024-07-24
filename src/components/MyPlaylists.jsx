import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyPlaylists = () => {
  const [albumData, setAlbumData] = useState(null);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const albumId = '2up3OPMp9Tb4dAKM2erWXQ'; // Replace with the desired album ID
        const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
          headers: {
            Authorization: 'Bearer BQCO-Wc-auek4DdExTpYACTMvsihh7jllJI9K1ZJKZbKX_EUvguexalOSCsDsV583fWbghmURSkdRAW8jKRIzzQuLvh6DpYHIE5DvjQBCJwhS8Pv26Ag3NtJJscOFlVBAX5foGtBT-SeRl9w_4f-Z5pOd5CsN9p5dstGlSs-PlWD4jxhRPjVA8onfbpnAvksfqQ3AD0XaxDCRJnpDjm-VGCt3Z5DsFisLEQRK8IODQGKqs1JRKXr27cOBgNPMn1jXqEqoacaX5Y7iEZbhO6rQpuYAoeP-MCSWg',
          },
        });

        setAlbumData(response.data);
      } catch (error) {
        console.error('Error fetching album data:', error);
      }
    };

    fetchAlbumData();
  }, []);

  return (
    <div>
      {albumData ? (
        <div className='flex flex-col min-w-[180px]  bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer p-2 px-3 hover:bg-[#ffffff26] m-1'>
          <h1>{albumData.name}</h1>
          <p>Album Type: {albumData.album_type}</p>
          <p>Total Tracks: {albumData.total_tracks}</p>
          <p>Release Date: {albumData.release_date}</p>
          <p>Genres: {albumData.genres.join(', ')}</p>
          <img src={albumData.images[0].url} alt={albumData.name} />
        </div>
      ) : (
        <p>Loading album data...</p>
      )}
    </div>
  );
};

export default MyPlaylists;
