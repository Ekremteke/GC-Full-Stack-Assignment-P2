import "./App.css";
import React, { useState, useEffect } from "react";
import { Header, Forms, VideoCards } from "./components";
import axios from "axios";

function App() {
  const [videos, setVideos] = useState([]);

  // Fetch existing videos on component mount
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:3030/videos");
        setVideos(res.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, []);

  // Define the addVideo function
  const addVideo = (newVideo) => {
    setVideos([...videos, newVideo]);
  };

  // Handle delete video function
  const deleteVideo = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/videos/${id}`);
      setVideos(videos.filter((video) => video.id !== id));
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  return (
    <div>
      <Header />
      <Forms addVideo={addVideo} />
      <VideoCards videos={videos} onDelete={deleteVideo} />
    </div>
  );
}

export default App;
