import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchTodos} from "./todosSlice";

export default function AddTodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const status = useSelector((state) => state.todos.status);
    const mylist = useSelector((state) => state.todos.myList);

    const handleSubmit = () => {
        if(text.trim() !== "") {
            dispatch(fetchTodos(text));
            setText("");
        }
    }

    return (
        <div className="bg-gradient-to-br from-gray-500 to-purple-800 flex flex-col items-center justify-evenly rounded-sm">
            <input 
            type="text"
            value={text}
            placeholder="Enter your task"
            onChange={(e) => setText(e.target.value)}
            className="m-4 bg-gray-400 hover:bg-slate-50 border-black rounded" />
            <button onClick={handleSubmit}>
                Add Task
            </button>
            {status === "loading" && <p>Adding...</p>}
            <ul className="bg-slate-300 rounded">
                {mylist.map((item) => 
                    (<li key={item.id}>{item.text}</li>)
                )}
            </ul>
        </div>
    )
}