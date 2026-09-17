import React from "react";
import {createContext, useContext, useState} from "react";

export const TodoContext = createContext({
    Todos:[
        {
            id:1,
            todo:"Learn React",
            completed:false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider