import React, { useState, useEffect } from "react";
import axios from "axios";
import { Forms } from "./Forms";
import { Videos } from "./Videos";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export const VideoCards = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchAllVideos = async () => {
      try {
        const res = await axios.get("http://localhost:3030/videos");
        setVideos(res.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchAllVideos();
  }, []);

  const handleAddVideo = (newVideo) => {
    setVideos([...videos, newVideo]);
  };

  const handleDeleteVideo = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/videos/${id}`);
      setVideos(videos.filter((video) => video.id !== id));
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Forms addVideo={handleAddVideo} />
      </Row>
      <Row>
        {videos.map((video) => (
          <Videos
            key={video.id}
            id={video.id}
            title={video.title}
            url={video.url}
            rating={video.rating}
            onDelete={handleDeleteVideo}
          />
        ))}
      </Row>
    </Container>
  );
};
