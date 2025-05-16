import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export default function CounterControls() {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <button onClick={() => dispatch(increment())} className="bg-green-500 rounded">plus</button>
            <button onClick={() => dispatch(decrement())} className="bg-red-500 rounded">minus</button>

            <input 
            type="numbet"
            value={amount}
            placeholder="Enter some number"
            onChange={(e) => setAmount(Number(e.target.value))}
            className="border-black rounded" />

            <button onClick={() => dispatch(incrementByAmount(amount))}>Dispatch amount</button>
        </div>
    )
}