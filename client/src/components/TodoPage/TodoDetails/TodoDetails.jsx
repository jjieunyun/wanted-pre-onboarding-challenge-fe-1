import React, {useState, useEffect} from "react";
import styles from "./TodoDetails.module.css";

function TodoDetails({selectedTodo, todo, fetchTodos}) {
  const token = localStorage.getItem("token");
  const [updatedTitle, setUpdatedTitle] = useState('')
  const [updatedContent, setUpdatedContent] = useState('')

  useEffect(() => {
    setUpdatedTitle(selectedTodo.title)
    setUpdatedContent(selectedTodo.content)
  }, [selectedTodo]);


  const handleTitleChange = (e) => setUpdatedTitle(e.target.value);
  const handleTextChange = (e) => setUpdatedContent(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault()
    await todo.updateTodo(token, selectedTodo.id, updatedTitle, updatedContent, selectedTodo.status).then(() => {
      alert('투두가 변경되었습니다')
      fetchTodos()
    })
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.title}
        type="text"
        value={updatedTitle}
        onChange={handleTitleChange}
      />
      <textarea
        className={styles.contents}
        value={updatedContent}
        onChange={handleTextChange}
      />
      <button className={styles.button}>Edit</button>
    </form>
  );
}

export default TodoDetails;
