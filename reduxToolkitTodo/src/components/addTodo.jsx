import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/Todo/todoslice'


function AddTodo() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
     

    return (
        <form
            onSubmit={addTodoHandler}
            className="w-full flex items-center gap-3 p-2
            bg-zinc-900 border border-zinc-700
            rounded-2xl shadow-lg
            focus-within:border-indigo-500
            transition-all duration-300"
        >
            <input
                type="text"
                className="flex-1 bg-transparent
                border-0 outline-none
                text-white text-base
                placeholder:text-zinc-500
                px-4 py-3
                focus:ring-0"
                placeholder="What needs to be done?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                type="submit"
                className="flex items-center gap-2
                text-white
                bg-indigo-500
                hover:bg-indigo-600
                active:scale-95
                px-5 py-3
                rounded-xl
                font-semibold
                text-sm
                shadow-md shadow-indigo-500/20
                transition-all duration-200
                whitespace-nowrap"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                    />
                </svg>

                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;

