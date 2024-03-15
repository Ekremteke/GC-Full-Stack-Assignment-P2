import React, { useState } from "react";
import "./comp.css";
export const Forms = ({ addVideo }) => {
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

        const res = await fetch("http://localhost:3030", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(input)
        });

        const data = await res.json();

        addVideo(input, data.id);

        setInput({ ...input, title: "", url: "" });
    }

    // const [id, setId] = useState(Math.floor(Math.random() * 99999));
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    // const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {

        e.preventDefault();

        const video = { title, url }
    }

    const [dlt, setDlt] = useState(true)
    // const displayForm = () => {
    //     setDlt(false);
    // }

    // const hideForm = (e) => {

    //     e.preventDefault();
    //     setDlt(true);
    // }
    return (
        <div className="form">
            <h2 /*onClick={displayForm}*/ className="coloring">Add Video</h2>
            {/* <form className={!dlt ? "d-block" : "d-none"} onSubmit={handleSubmit}> */}
            {/* <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label col-sm-3">Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control col-sm-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label col-sm-3">URL</label>
                    <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" className="form-control col-sm-3" id="url" />
                </div>
                <div><button type="submit" className="btn btn-primary" onClick={hideForm}>Cancel</button>
                    <p> </p>
                    <button type="submit" className="btn btn-primary">Add</button> </div> */}

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

            {/* </form> */}

        </div>
    )
}
