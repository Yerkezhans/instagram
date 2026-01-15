import { useState, useEffect } from "react";
import { Route, Link } from "wouter";
import Post from "./component/Post";
import Chat from "./component/Chat";
import "./index.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/posts.json");
      const data = await response.json();

      const result = data.map(post => ({
        ...post,
        likes: [],
        comments: []
      }));

      setPosts(result);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Route path="/">
        <div className="app">
          <div className="feed">
            <h1>Instagram</h1>

            {posts.map(post => (
              <Post key={post.id} post={post} setPosts={setPosts} />
            ))}
          </div>

          <Link href="/chat" className="direct-icon">
            Direct
          </Link>
        </div>
      </Route>

      <Route path="/chat">
        <Chat />
      </Route>
    </>
  );
}

export default App;
