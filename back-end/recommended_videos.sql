-- Connect to the newly created database
\c recommended_videos

-- Create the 'videos' table
CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    url TEXT NOT NULL,
    rating INTEGER DEFAULT 0
);

-- Insert example data (optional)
INSERT INTO videos (title, url, rating) VALUES
('Sample Video 1', 'http://example.com/video1', 5),
('Sample Video 2', 'http://example.com/video2', 3);
