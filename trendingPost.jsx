import { useEffect, useState } from "react";
import axios from "axios";

const TrendingPostsPage = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/posts")
      .then(response => {
        const posts = response.data;
        const maxComments = Math.max(...posts.map(post => post.comments.length));
        const trending = posts.filter(post => post.comments.length === maxComments);
        setTrendingPosts(trending);
      })
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
      {trendingPosts.map(post => (
        <div key={post.id} className="border p-3 mb-2 rounded bg-gray-100">
          <p>{post.content}</p>
          <p className="text-sm text-gray-600">Comments: {post.comments.length}</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPostsPage;
