const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "tekre",
  password: "185606",
  database: "recommended_videos",
  port: 5432,
});

const testConnection = async () => {
  try {
    const client = await pool.connect();
    const res = await client.query("SELECT NOW()");
    console.log("Connection successful:", res.rows[0]);
    client.release();
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
};

testConnection();
