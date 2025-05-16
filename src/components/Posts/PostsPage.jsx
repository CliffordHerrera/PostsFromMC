import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../Redux/slices/postSlice";
import { Link } from "react-router-dom";

export default function PostsPage() {
    const { postData, status } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const [showPosts, setShowPosts] = useState(false);
    const [inpPost, setInpPost] = useState(0);
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const onePost = postData.filter((post) => (post.id === Number(inpPost)));
    

    return (
        <div className="bg-gradient-to-br from-slate-600 to-purple-950 flex flex-col items-center justify-evenly w-full">
            <h2 className="text-white font-extrabold">Posts</h2>
            {status === 'loading' && <p>Loading...</p>}
            <button onClick={() => setShowPosts(true)} className="bg-blue-300 hover:bg-blue-500 border-black rounded m-3">GEt posts</button>
            {status === 'succeeded' && showPosts &&
                <div>
                    <ul className="flex flex-col justify-evenly text-white">
                        {postData.map((post) =>
                        (
                            <Link key={post.id} to={`/posts/${post.id}`}>
                                <div className="p-4">
                                    <p>{post.title}</p>
                                </div>
                            </Link>
                        ))}
                    </ul>
                    <input type="number"
                            value={inpPost}
                            placeholder="Enter id of post"
                            onChange={(e) => setInpPost(e.target.value)}
                            className="bg-slate-500 hover:bg-slate-100 border-black rounded" />

                    <p className="bg-red-300 rounded m-4">{onePost.length > 0 ? onePost[0].title : "No post found"}</p>
                </div>

            }

            {status === 'failed' && <p>Error, netu postov zaebal</p>}
        </div>
    );
}
