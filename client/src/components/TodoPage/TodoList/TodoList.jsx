import React, {useState} from "react";
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

  const filtered = getFilteredItems(todoList, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
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

function getFilteredItems(todoList, filter) {
  if (filter === "all") {
    return todoList;
  }

  if(filter === 'active'){
    return todoList.filter((todo) => !todo.status);
  }else {
    return todoList.filter((todo) => todo.status);
  }

}
