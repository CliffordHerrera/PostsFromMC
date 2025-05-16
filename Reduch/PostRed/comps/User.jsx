import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetail } from "./Reduch/usersSlice";

export const User = () => {
    const { id } = useParams();
    const { userData } = useSelector((state) => state.users)
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center justify-around bg-orange-300 rounded w-fit mx-auto">
            <h1>User {id}</h1>
            <p>
                {userData
                    .filter((user) => user.id === (parseInt(id)))
                    .map((user) => (
                    <div className="flex flex-col items-center justify-around p-4">
                        <span key={user.id}>
                            {user.name} — {user.email}
                        </span>
                        <button onClick={() => dispatch(setUserDetail(user))}
                        className="bg-green-500 text-white px-4 py-2 rounded m-3">Save Info</button>
                    </div>
                    ))}
            </p>



        </div>)
}


/*{userData.map((user) => 
                (
                    <p key={user.id}>{user.name}</p>
                ))}*/