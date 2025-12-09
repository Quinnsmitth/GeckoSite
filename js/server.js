const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const DATA_FILE = "posts.json";

// Helper to read posts
function readPosts() {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
}

// Helper to write posts
function writePosts(posts) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2));
}

// Get all posts
app.get("/posts", (req, res) => {
    const posts = readPosts();
    res.json(posts);
});

// Add a new post
app.post("/posts", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: "Title and content required" });

    const posts = readPosts();
    posts.push({
        title,
        content,
        date: new Date().toLocaleString()
    });
    writePosts(posts);
    res.json({ status: "ok" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
