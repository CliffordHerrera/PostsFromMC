import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/slices/authSlice";

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.auth.users);

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={() => dispatch(register())}>
                <input type="text" placeholder="Enter your username" />
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
                <button type="submit">Register</button>

            </form>
            <p>{users}</p>
        </div>
    );
};

