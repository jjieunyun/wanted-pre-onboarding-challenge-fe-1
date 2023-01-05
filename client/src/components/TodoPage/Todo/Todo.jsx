import React, {useEffect, useState} from "react";
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
  const {id, title, content, status} = item;

  const [updatedStatus, setUpdatedStatus] = useState(false)
  useEffect(() => {
    setUpdatedStatus(status)
  }, [])

  const handleChange = async () => {
    setUpdatedStatus(!updatedStatus)
    await todo.updateTodo(token, id, title, content, !updatedStatus).then(()=>fetchTodos())
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
        checked={updatedStatus}
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
