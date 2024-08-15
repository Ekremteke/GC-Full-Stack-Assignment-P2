const express = require("express");
const app = express();
const cors = require("cors");
const { Pool } = require("pg");

const db = new Pool({
  host: "localhost",
  user: "tekre",
  password: "185606",
  database: "recommended_videos",
  port: 5432, //
});

const port = process.env.PORT || 3030;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/videos", (req, res) => {
  db.query("SELECT * FROM videos", (err, result) => {
    if (err) {
      console.error("Error retrieving videos:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(result.rows);
  });
});

app.post("/videos", (req, res) => {
  const { title, url, rating } = req.body;

  db.query(
    "INSERT INTO videos (title, url, rating) VALUES ($1, $2, $3) RETURNING *",
    [title, url, rating],
    (err, result) => {
      if (err) {
        console.error("Error adding video:", err);
        res.status(500).json({ error: "Internal server error", details: err });
        return;
      }
      const newVideo = result.rows[0];
      res.status(201).json(newVideo);
    }
  );
});

app.delete("/videos/:id", (req, res) => {
  const videoId = req.params.id;

  db.query("DELETE FROM videos WHERE id = $1", [videoId], (err, result) => {
    if (err) {
      console.error("Error deleting video:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.status(200).json({ message: "Video deleted successfully" });
  });
});

// app.get("/test", (req, res) => {
//   db.query("SELECT NOW()", (err, result) => {
//     if (err) {
//       console.error("Error executing test query:", err);
//       res.status(500).json({ error: "Internal server error", details: err });
//       return;
//     }
//     res.json(result.rows);
//   });
// });

app.listen(port, () => console.log(`Connected to backend ${port}`));
