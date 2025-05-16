import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../components/Reduch/usersSlice";
import { Route, Routes, Link } from "react-router-dom";
import { User } from "./User";

const UsersPage = () => {
    const { userData, status } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const [showUsers, setShowUsers] = useState(false);
    const userDet = useSelector((state) => state.users.userDetail);


    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    return (
        <div className="flex flex-col items-center justify-around">
            <h2>Users</h2>
            {status === "loading" && <p>Loading...</p>}
            <button onClick={() => setShowUsers(true)}
                className="bg-purple-500 m-4 rounded">Get Users</button>
            {status === "succeeded" && showUsers &&
                (
                    <ul className="flex flex-col items-center justify-evenly m-1">
                        {userData.map((user) => (
                            <Link key={user.id} to={`/users/${user.id}`}>
                                {user.id === userDet.id? "" : user.name} {userDet.id === user.id && 
                                <div className="flex flex-col items-center justify-center bg-slate-300 rounded m-1">
                                    <p>{user.name}</p>
                                    <p>Email: {user.email}</p>
                                    <p>Street: {user.address.street}</p>
                                </div>
                                
                                }
                            </Link>
                        ))}
                    </ul>
                )}
            {status === "error" && <p>Error: {error}</p>}
        </div>
    );
};

export default UsersPage;

