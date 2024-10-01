import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./comp.css";

export const Videos = ({ id, title, url, rating, onDelete }) => {
  const [votes, setVotes] = useState(0);

  const increaseVotes = () => {
    setVotes(votes + 1);
  };

  const decreaseVotes = () => {
    if (rating + votes > 0) {
      setVotes(votes - 1);
    }
  };

  return (
    <div className="main-container">
      <div className="cards">
        <p>{title}</p>
        <div>
          <ReactPlayer width="355px" height="200px" url={url} />
        </div>
        <br />
        <div className="thumbs-icons">
          <button
            className="fa-regular fa-thumbs-up"
            onClick={increaseVotes}
            aria-label="Increase votes"
          >
            +
          </button>
          <p>{parseInt(rating) + votes}</p>
          <button
            className="fa-regular fa-thumbs-down"
            onClick={decreaseVotes}
            aria-label="Decrease votes"
          >
            -
          </button>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onDelete(id)}
          aria-label={`Delete video ${title}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
