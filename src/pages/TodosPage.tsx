import React, { useState, useEffect } from "react";
import { ToDoForm } from "../components/ToDoForm";
import { TodoList } from "../components/TodoList";

import { ITodo } from "../inerfaces";
declare var confirm: (query: string) => boolean;
export const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addhandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };
  const toggleHandler = (id: number) => {
    todos.map(elem=>{
      if(elem.id===id){
        console.log('elem.id', elem.id)
        elem.completed=!elem.completed
        setTodos(todos=>[...todos, ])
      }
// return elem
    })
    // setTodos(prev =>
    //   prev.map(todo => {
    //     if (todo.id === id) {
    //       todo.completed = !todo.completed;
    //       console.log("todo.completed", todo.completed);
        
        
    //     }
    //     return todo;
      
    //   })
    // );
  };
  const removeHandler = (id: number) => {
    const shoulDel = confirm("Are you sure?");
    if (shoulDel) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
      <ToDoForm onAdd={addhandler} />
      <TodoList
        onToggle={toggleHandler}
        onRemove={removeHandler}
        todos={todos}
      />
    </>
  );
};
