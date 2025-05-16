import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import PostsPage from "./components/PostsPage";
import Dashboard from "./components/dashboard";
import { User } from "./components/User";
import { Post } from "./components/Post";

export default function App() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My App</h1>

            <nav className="p-5 flex flex-row justify-evenly bg-orange-300 rounded m-3">
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/users/:id" element={<User />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/posts/:postId" element={<Post />} />
            </Routes>
        </div>
    );
}

