import React, { useState } from "react";
import { useEffect } from "react";
// import AddTodo from "../AddtTodo/AddTodo";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoPage({ filter }) {
  // const [todos, setTodos] = useState([
  //   { id: "123", text: "장보기", status: "active" },
  //   { id: "124", text: "공부하기", status: "active" },
  // ]);

  //❗️❗️❗️컴포넌트가 리렌더링 될때마다 useState도 같이 호출 -> 초기값 전달 -> 내부적으로 전달된 값이 있따면 새로 호출하는 초기값 무시
  // const [todos, setTodos] = useState(readTodosFromLocalStorage());
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage()); //콜백함수 전달

  const handleAdd = (todo) => setTodos([...todos, todo]);

  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodosFromLocalStorage() {
  //❗️❗️❗️컴포넌트가 리렌더링 될때마다 useState도 같이 호출 -> 초기값 전달 -> 내부적으로 전달된 값이 있따면 새로 호출하는 초기값 무시
  console.log("readTodosFromLocalStorage");
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
