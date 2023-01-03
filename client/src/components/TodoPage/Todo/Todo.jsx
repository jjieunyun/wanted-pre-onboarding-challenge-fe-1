import React from "react";
import styles from "./Todo.module.css";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({
  todo,
  onUpdate,
  onDelete,
  setSelectedTodo,
  setIsAdd,
}) {
  const { id, text, title, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  const onClickTodo = () => {
    setSelectedTodo(todo);
    setIsAdd(false);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label className={styles.text} onClick={onClickTodo}>
        {title}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
