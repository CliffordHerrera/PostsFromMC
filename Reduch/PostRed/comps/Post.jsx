import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPostDetail, updateBody } from "./Reduch/postSlice";

export const Post = () => {
    const { postId } = useParams();
    const post = useSelector((state) => state.posts.postData.find((p) => p.id === parseInt(postId)));
    const dispatch = useDispatch();
    const [newBody, setNewBody] = useState('');
    const navigate = useNavigate();

    const handleEdit = () => {
        dispatch(updateBody({ id: post.id, body: newBody }));
        localStorage.setItem('posts', JSON.stringify(postData));
    }
    //console.log(postId);
    //console.log(post);
    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-purple-600 rounded">
            <div>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-blue-500 px-4 py-1 rounded mt-2 hover:bg-blue-600 absolute top-50 left-5"
                >
                    Back
                </button>
                <h1 className="text-2xl font-bold">Post details № {postId}</h1>
            </div>
            
            <p className="text-green-300">{post.title}</p>
            <p><span className="text-red-500 font-semibold">Cytb:</span>  {post.body}</p>
            <textarea
                value={newBody}
                onChange={(e) => setNewBody(e.target.value)}
                className="m-2 p-2 border border-gray-300 rounded w-2/3"
            />

            <button
                onClick={handleEdit}
                className="bg-yellow-400 px-4 py-1 rounded mt-2 hover:bg-yellow-500"
            >
                Save Edited Body
            </button>

            <p className="mt-4 text-sm text-white bg-black p-2 rounded">Current Body: {post.body}</p>
        </div>
    )
}