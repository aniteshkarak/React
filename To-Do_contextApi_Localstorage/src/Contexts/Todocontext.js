import React from "react";
import {createContext, useContext, useState} from "react";

export const TodoContext = createContext({
    Todos:[
        {
            id:1,
            title:"Learn React",
            completed:false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {},
})

export const UseToDo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider