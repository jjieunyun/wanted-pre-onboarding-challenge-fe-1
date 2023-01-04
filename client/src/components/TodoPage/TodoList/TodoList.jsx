import React, {useState} from "react";
import {useEffect} from "react";
// import AddTodo from "../AddtTodo/AddTodo";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoPage({
                                   filter,
                                   todoList,
                                   fetchTodos,
                                   setSelectedTodo,
                                   setIsAdd,
                                   todo,
                                 }) {



  // const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {todoList.map((item) => (
          <Todo
            key={item.id}
            item={item}
            todo={todo}
            setSelectedTodo={setSelectedTodo}
            setIsAdd={setIsAdd}
            fetchTodos={fetchTodos}
          />
        ))}
      </ul>
    </section>
  );
}

// function getFilteredItems(todos, filter) {
//   if (filter === "all") {
//     return todos;
//   }
//   return todos.filter((todo) => todo.status === filter);
// }
