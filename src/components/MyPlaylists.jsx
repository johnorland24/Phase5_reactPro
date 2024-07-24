 
import React, { useState, useEffect } from "react";  

const MyPlaylists = () => {  
  const [playlists, setPlaylists] = useState([]);  
  const [error, setError] = useState(null);  
  const clientId = ""; 
  const clientSecret = "";  

   
  const fetchAccessToken = async () => {  
    const response = await fetch("https://accounts.spotify.com/api/token", {  
      method: "POST",  
      headers: {  
        "Content-Type": "application/x-www-form-urlencoded",  
      },  
      body: new URLSearchParams({  
        grant_type: "client_credentials",  
        client_id: clientId,  
        client_secret: clientSecret,  
      }),  
    });  

    const data = await response.json();  
    return data.access_token;  
  };  

  
  const fetchUserPlaylists = async () => {  
    try {  
      const accessToken = await fetchAccessToken();  
      const response = await fetch(`https://api.spotify.com/v1/me/playlists`, {  
        headers: {  
          Authorization: `Bearer ${accessToken}`,  
        },  
      });  

      if (!response.ok) throw new Error("Failed to fetch playlists");  

      const playlistsData = await response.json();  
      setPlaylists(playlistsData.items);  
    } catch (error) {  
      setError(error.message);  
    }  
  };  

  useEffect(() => {  
    fetchUserPlaylists();  
  }, []);  

  if (error) {  
    return <div className="text-red-500">{error}</div>;  
  }  

  if (!playlists.length) {  
    return <div className="text-blue-500">Loading playlists...</div>;  
  }  

  return (  
    <div className="max-w-md mx-auto my-4 p-6 border rounded-lg shadow-lg bg-white">  
      <h1 className="text-xl font-bold">My Playlists</h1>  
      <ul className="mt-4">  
        {playlists.map((playlist) => (  
          <li key={playlist.id} className="my-2">  
            <h2 className="font-semibold">{playlist.name}</h2>  
            <img src={playlist.images[0]?.url} alt={playlist.name} className="w-full rounded-lg" />  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default MyPlaylists;