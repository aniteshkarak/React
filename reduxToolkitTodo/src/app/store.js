import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todoslice";

const savedTodos = localStorage.getItem("todos");

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    preloadedState: savedTodos
        ? {
              todos: {
                  todos: JSON.parse(savedTodos),
              },
          }
        : undefined,
});

store.subscribe(() => {
    const todos = store.getState().todos.todos;

    localStorage.setItem("todos", JSON.stringify(todos));
});