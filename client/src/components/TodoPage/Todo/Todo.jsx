import React from "react";
import styles from "./Todo.module.css";
import {FaTrashAlt} from "react-icons/fa";

export default function Todo({
                               item,
                               todo,
                               setSelectedTodo,
                               setIsAdd,
                               fetchTodos
                             }) {
  const token = localStorage.getItem("token");
  const {id, title} = item;
  const handleChange = (e) => {
    // const status = e.target.checked ? "completed" : "active";
    // onUpdate({ ...todo, status });
  };

  const handleDelete = async () => {
    await todo.deleteTodo(token, id).then(() => {
      alert('투두가 삭제되었습니다.')
      fetchTodos()
    })
  };

  const onClickTodo = async () => {
    await todo.getTodoById(token, id).then(result => setSelectedTodo(result.data));
    setIsAdd(false);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        // checked={status === "completed"}
        onChange={handleChange}
      />
      <label className={styles.text} onClick={onClickTodo}>
        {title}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrashAlt/>
        </button>
      </span>
    </li>
  );
}
