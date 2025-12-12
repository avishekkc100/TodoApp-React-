import React, { useContext } from "react";

export const TodoContext = React.createContext({
    todos: [
        {
            id:1,
            todo: "Todo msg",
            completed:false
        
        }
    ],
    addTodo: (todo)=>{},
    toggleCompleted: (id)=>{},
    editTodo: (id,todo)=>{},
    deleteTodo: (id)=>{}
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext);
}