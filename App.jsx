import { Routes, Route, NavLink } from "react-router-dom";
import TopUsersPage from "./pages/TopUsersPage";
import TrendingPostsPage from "./pages/TrendingPostsPage";
import FeedPage from "./pages/FeedPage";

function App() {
  return (
    <div className="p-4">
      <nav className="mb-4 flex gap-4 text-blue-600 font-bold">
        <NavLink to="/" className="hover:underline">Feed</NavLink>
        <NavLink to="/top-users" className="hover:underline">Top Users</NavLink>
        <NavLink to="/trending-posts" className="hover:underline">Trending Posts</NavLink>
      </nav>
      
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/top-users" element={<TopUsersPage />} />
        <Route path="/trending-posts" element={<TrendingPostsPage />} />
      </Routes>
    </div>
  );
}

export default App;
