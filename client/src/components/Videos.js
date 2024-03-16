import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./comp.css";

export const Videos = (props) => {
    const [votes, setVotes] = useState(0);

    const increaseVotes = () => {
        setVotes(votes + 1);
    };

    const decreaseVotes = () => {
        if (props.rating + votes > 0) {
            setVotes(votes - 1);
        }
    };

    return (
        <div className="main-container">
            <div className="cards">
                <p>{props.title}</p>
                <div>
                    <ReactPlayer width="355px" height="200px" url={props.url} />
                </div>
                <br />
                <div className="thumbs-icons">
                    <button className="fa-regular fa-thumbs-up" onClick={increaseVotes}>+</button>
                    <p>{parseInt(props.rating) + votes}</p>
                    <button className="fa-regular fa-thumbs-down" onClick={decreaseVotes}>-</button>
                </div>
                <button type="button" className="btn btn-primary" onClick={() => props.onDelete(props.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};
