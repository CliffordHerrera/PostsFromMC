import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "./components/Reduch/todosSlice";
import AddTodoForm from "./components/Reduch/addTodoForm";
//import CounterControls from "./components/Reduch/CounterControls";

export default function App() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const status = useSelector((state) => state.todos.status);
    const error = useSelector((state) => state.todos.error);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div className="flex flex-col items-center justify-between">
            <h1 className="text-xl mb-4">Todo List</h1>

            {status === 'loading' && <p>Loading...</p>}
            {status === 'succeeded' && 
            (
                <ul className="list-disc pl-5">
                    {todos.slice(0, 10).map((todo) => 
                        (
                            <li key={todo.id}>{todo.title} {todo.completed ? 'V' : 'X'}
                            <button onClick={() => dispatch({type: 'todos/toggleTodo', payload: todo.id})}
                                className="bg-green-500 text-white px-4 py-2 rounded">Toggle todo</button>
                                <button onClick={() => dispatch({type: 'todos/deleteTodo', payload: todo.id})}
                                className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                            </li>
                        ))}
                </ul>
            )}
            {status === 'error' && <p>Error: {error}</p>}
            <AddTodoForm />
        </div>
    )
}