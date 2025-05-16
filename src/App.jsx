import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { AuthPage } from "./components/Auth/AuthPage";
import { RegisterPage } from "./components/Auth/RegisterPage";
import  PostsPage  from "./components/Posts/PostsPage";
import {Post} from "./components/Posts/Post";

export default function App() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My App</h1>

            <nav className="p-5 flex flex-row justify-evenly bg-orange-300 rounded m-3 hover:bg-orange-400">
                <Link className="hover:text-white" to="/">Home</Link>
                <Link className="hover:text-white" to="/auth">Authentify</Link>
                <Link className="hover:text-white" to="/register">Register</Link>
                <Link className="hover:text-white" to="/posts">Posts</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/posts/:postId" element={<Post />} />
                {/* <Route path="/posts/:postId/edit" element={<EditPost />} /> */}
                {/* <Route path="/posts/:postId/add" element={<AddPost />} /> */}
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </div>
    );
}

