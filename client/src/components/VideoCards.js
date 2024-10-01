// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Videos } from "./Videos";
// import "./comp.css"; // Make sure to import your CSS file

// export const VideoCards = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchAllVideos = async () => {
//       try {
//         const res = await axios.get("http://localhost:3030/videos");
//         setVideos(res.data);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };
//     fetchAllVideos();
//   }, []);

//   const handleAddVideo = (newVideo) => {
//     setVideos([...videos, newVideo]);
//   };

//   const handleDeleteVideo = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3030/videos/${id}`);
//       setVideos(videos.filter((video) => video.id !== id));
//     } catch (error) {
//       console.error("Error deleting video:", error);
//     }
//   };

//   return (
//     <div className="video-cards-container">
//       <div className="videos-grid">
//         {videos.map((video) => (
//           <Videos
//             key={video.id}
//             id={video.id}
//             title={video.title}
//             url={video.url}
//             rating={video.rating}
//             onDelete={handleDeleteVideo}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
import React from "react";
import { Videos } from "./Videos";
import "./comp.css"; // Make sure to import your CSS file

export const VideoCards = ({ videos, onDelete }) => {
  return (
    <div className="video-cards-container">
      <div className="videos-grid">
        {videos.map((video) => (
          <Videos
            key={video.id}
            id={video.id}
            title={video.title}
            url={video.url}
            rating={video.rating}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
