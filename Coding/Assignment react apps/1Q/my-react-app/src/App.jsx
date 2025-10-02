import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (isOnline) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data.slice(0, 10))) 
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [isOnline]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="container">
      <h1>Post Viewer</h1>

      {!isOnline ? (
        <div className="offline">
          <span className="red-dot">🔴</span>
          <p>
            Currently you are offline. Connect to a network to see the data.
          </p>
        </div>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <div className="post-card" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
