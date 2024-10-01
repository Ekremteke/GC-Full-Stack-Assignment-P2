import React, { useState } from "react";
import "./comp.css"; // Make sure to import your updated CSS file

export const Forms = ({ addVideo }) => {
  const [input, setInput] = useState({
    title: "",
    url: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3030/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      if (!res.ok) {
        throw new Error("Failed to add video");
      }

      const data = await res.json();
      addVideo(data);
      setInput({ title: "", url: "", rating: 0 });
    } catch (error) {
      console.error("Error adding video:", error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add Video</h2>
      <form onSubmit={onSubmit} className="form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={input.title}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter video title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="url" className="form-label">
            Url
          </label>
          <input
            id="url"
            type="text"
            name="url"
            value={input.url}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter video URL"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            id="rating"
            type="number"
            name="rating"
            value={input.rating}
            onChange={handleChange}
            className="form-input"
            min="0"
            max="10"
            placeholder="0-10"
          />
        </div>

        <button className="btn-submit" type="submit">
          Add Video
        </button>
      </form>
    </div>
  );
};
