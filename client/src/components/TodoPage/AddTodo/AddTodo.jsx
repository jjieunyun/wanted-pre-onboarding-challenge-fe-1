import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleTextChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), title, text, status: "active" });
    setText("");
    setTitle("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.title}
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className={styles.contents}
        type="text"
        placeholder="Todo details"
        value={text}
        onChange={handleTextChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
