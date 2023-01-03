import React from "react";
import styles from "./TodoDetails.module.css";

function TodoDetails({ selectedTodo }) {
  const { title, text } = selectedTodo;

  const handleTitleChange = (e) => console.log(e.target.value);
  const handleTextChange = (e) => console.log(e.target.value);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if (text.trim().length === 0) {
    //   return;
    // }
    // onAdd({ id: uuidv4(), title, text, status: "active" });
    // setText("");
    // setTitle("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.title}
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className={styles.contents}
        type="text"
        value={text}
        onChange={handleTextChange}
      />
      <button className={styles.button}>Edit</button>
    </form>
  );
}

export default TodoDetails;
