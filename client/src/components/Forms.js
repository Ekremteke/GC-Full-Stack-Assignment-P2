import React, { useState } from "react";
import "./comp.css";

export const Forms = ({ addVideo, setVideos, videos }) => {
    const [input, setInput] = useState({
        title: "",
        url: "",
        rating: 0
    });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3030/videos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input)
            });

            if (!res.ok) {
                throw new Error("Failed to add video");
            }

            const data = await res.json();
            addVideo(data);

            setVideos([...videos, data]);

            setInput({ title: "", url: "", rating: 0 });
        } catch (error) {
            console.error("Error adding video:", error);
        }
    }

    return (
        <div className="form">
            <h2>Add Video</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>
                        Title
                        <br />
                        <input id="title" type="text" name="title" value={input.title} onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <label>
                        Url
                        <br />
                        <input id="url" type="text" name="url" value={input.url} onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <button className="btn-submit" type="submit">Add</button>
                </div>
            </form>
        </div>
    );
};
