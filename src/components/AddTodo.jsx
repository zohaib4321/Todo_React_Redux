import React, { useState } from 'react'
import {addTodo} from "../features/todo/todoSlice"
import { useDispatch } from 'react-redux' 

function AddTodo() {

    const dispatch = useDispatch()

    const [input, setInput] = useState('')

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input) return;
        dispatch(addTodo(input))
        setInput('')
    }
    return (
    <form onSubmit={addTodoHandler} 
    className="mt-12 flex justify-center items-center">
        <input
        type="text"
        className="w-[40%] h-10 text-white border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button
        type="submit"
        className="rounded-r-lg h-10 px-3 py-1 bg-green-600 text-white shrink-0"
        >
        Add
        </button>
    </form>
)
}

export default AddTodo
