const postBtn = document.getElementById("postBtn");
const postList = document.getElementById("postList");
const API_URL = "http://localhost:3000/posts";

// Fetch and display posts
async function displayPosts() {
    const res = await fetch(API_URL);
    const posts = await res.json();
    postList.innerHTML = "";
    posts.slice().reverse().forEach(post => {
        const el = document.createElement("div");
        el.classList.add("post-card");
        el.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <small>Posted on ${post.date}</small>
        `;
        postList.appendChild(el);
    });
}

// Add a new post
postBtn.addEventListener("click", async () => {
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;

    if (!title || !content) {
        alert("Please fill out both fields!");
        return;
    }

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content })
    });

    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";

    displayPosts();
});

displayPosts();