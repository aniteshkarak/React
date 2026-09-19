import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    removeTodo,
    updateTodo
} from "../features/Todo/todoslice";

function Todos() {
    const todos = useSelector((state) => state.todos?.todos || []);
    const dispatch = useDispatch();

    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    console.log(todos);

    // Start editing
    const handleEdit = (todo) => {
        setEditingId(todo.id);
        setEditText(todo.text);
    };

    // Save updated todo
    const handleUpdate = (id) => {
        if (!editText.trim()) return;

        dispatch(
            updateTodo({
                id: id,
                text: editText
            })
        );

        setEditingId(null);
        setEditText("");
    };

    return (
        <>
            <div className="w-full max-w-2xl mx-auto mt-8 px-4">

                {/* Heading */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white">
                        My Todos
                    </h2>

                    <p className="text-sm text-zinc-400 mt-1">
                        Manage your tasks easily
                    </p>
                </div>

                {/* Todo List */}
                <ul className="list-none space-y-3">
                    {todos.map((todo) => (
                        <li
                            className="group flex items-center justify-between gap-4
                            bg-zinc-900/80 border border-zinc-700
                            px-4 py-3 rounded-xl
                            shadow-lg shadow-black/10
                            hover:border-zinc-500 hover:bg-zinc-800
                            transition-all duration-200"
                            key={todo.id}
                        >

                            {/* Todo Text / Edit Input */}
                            <div className="flex items-center gap-3 min-w-0 flex-1">

                                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>

                                {editingId === todo.id ? (
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) =>
                                            setEditText(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                handleUpdate(todo.id);
                                            }
                                        }}
                                        className="w-full bg-zinc-700 text-white
                                        border border-zinc-600
                                        rounded-lg px-3 py-2
                                        outline-none
                                        focus:border-blue-500"
                                        autoFocus
                                    />
                                ) : (
                                    <div className="min-w-0">
                                        <div className="text-white font-medium truncate">
                                            {todo.text}
                                        </div>
                                        <div className="text-xs text-zinc-500 mt-1">
                                            {new Date(todo.createdAt).toLocaleString("en-IN", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center gap-2 shrink-0">

                                {editingId === todo.id ? (
                                    <>
                                        {/* Save */}
                                        <button
                                            onClick={() =>
                                                handleUpdate(todo.id)
                                            }
                                            className="flex items-center gap-2
                                            text-white
                                            bg-green-500/90
                                            px-4 py-2
                                            rounded-lg
                                            font-medium
                                            text-sm
                                            hover:bg-green-600
                                            active:scale-95
                                            transition-all duration-200"
                                        >
                                            Save
                                        </button>

                                        {/* Cancel */}
                                        <button
                                            onClick={() => {
                                                setEditingId(null);
                                                setEditText("");
                                            }}
                                            className="text-white
                                            bg-zinc-600
                                            px-4 py-2
                                            rounded-lg
                                            font-medium
                                            text-sm
                                            hover:bg-zinc-500
                                            active:scale-95
                                            transition-all duration-200"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        {/* Delete */}
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    removeTodo(todo.id)
                                                )
                                            }
                                            className="flex items-center justify-center
                                            text-white
                                            bg-red-500/90
                                            border border-red-400/20
                                            w-10 h-10
                                            rounded-lg
                                            hover:bg-red-600
                                            active:scale-95
                                            transition-all duration-200"
                                            title="Delete Todo"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </button>

                                        {/* Edit */}
                                        <button
                                            onClick={() =>
                                                handleEdit(todo)
                                            }
                                            className="flex items-center gap-2
                                            text-white
                                            bg-blue-500/90
                                            px-4 py-2
                                            rounded-lg
                                            font-medium
                                            text-sm
                                            hover:bg-blue-600
                                            active:scale-95
                                            transition-all duration-200"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-4 h-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 7.125L16.875 4.5"
                                                />
                                            </svg>

                                            Edit
                                        </button>
                                    </>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Todos;