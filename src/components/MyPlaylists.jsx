import React, { useState, useEffect } from 'react';  
import axios from 'axios';  

const TrackDetails = () => {  
  const [track, setTrack] = useState(null);  
  const [error, setError] = useState(null);  
  const [loading, setLoading] = useState(true);  

  useEffect(() => {  
    const fetchTrackDetails = async () => {  
      const accessToken = localStorage.getItem('BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11'); 

      try {  
        const response = await axios.get('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', {  
          headers: {  
            'Authorization': 'Bearer ' + accessToken, 
          },  
        });  
        setTrack(response.data);  
      } catch (err) {  
        setError(err.response ? err.response.data.error.message : err.message);   
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchTrackDetails();  
  }, []);  

  if (loading) return <div>Loading...</div>;  
  if (error) return <div>Error: {error}</div>;  

  return (  
    <div className="flex flex-col space-y-4">  
      {track && (  
        <div className="flex items-center p-2 rounded-lg bg-gray-200">  
          <img  
            className="w-10 h-10 mr-2 rounded-lg"  
            src={track.album.images[0]?.url || 'placeholder_image_url'}  
            alt={track.name}  
          />  
          <p className="text-sm font-medium">{track.name} - {track.artists[0].name}</p>  
          <p className="text-sm">{track.album.name}</p>  
        </div>  
      )}  
    </div>  
  );  
};  

export default TrackDetails;