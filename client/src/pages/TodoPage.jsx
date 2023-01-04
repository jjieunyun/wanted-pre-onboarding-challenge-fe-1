import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/TodoPage/Header/Header";
import TodoList from "../components/TodoPage/TodoList/TodoList";
import styles from "./TodoPage.module.css";
import TodoDetails from "../components/TodoPage/TodoDetails/TodoDetails";
import AddTodo from "../components/TodoPage/AddTodo/AddTodo";

const filters = ["all", "active", "completed"];

export default function TodoPage({ todo }) {
  const [filter, setFilter] = useState(filters[0]);
  const [isAdd, setIsAdd] = useState(true);
  const [todoList, setTodoList] = useState([]);
  // const [todos, setTodos] = useState(() => readTodosFromLocalStorage()); //콜백함수 전달
  //❗️❗️❗️컴포넌트가 리렌더링 될때마다 useState도 같이 호출 -> 초기값 전달 -> 내부적으로 전달된 값이 있다면 새로 호출하는 초기값 무시
  // const [todos, setTodos] = useState(readTodosFromLocalStorage());
  const [selectedTodo, setSelectedTodo] = useState(null);
  const token = localStorage.getItem("token");


  //todo가져오는 함수
  const fetchTodos = async () => {
    await todo.getTodos(token).then((result) => setTodoList(result.data));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className={styles.TodoPage}>
      <Header
        filters={filters}
        filter={filter}
        setIsAdd={setIsAdd}
        isAdd={isAdd}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <div className={styles.container}>
        <div className={styles.left}>
          <TodoList
            filter={filter}
            todoList={todoList}
            todo={todo}
            setTodoList={setTodoList}
            setSelectedTodo={setSelectedTodo}
            setIsAdd={setIsAdd}
            fetchTodos={fetchTodos}
          />
        </div>
        <div className={styles.right}>
          {isAdd ? (
            <AddTodo todo={todo} setTodoList={setTodoList} fetchTodos={fetchTodos}/>
          ) : (
            <TodoDetails selectedTodo={selectedTodo} setTodoList={setTodoList} todo={todo} fetchTodos={fetchTodos}/>
          )}
        </div>
      </div>
    </div>
  );
}

//📌api를 사용하기 때문에 더이상 사용하지 않음
// function readTodosFromLocalStorage() {
//   //❗️❗️❗️컴포넌트가 리렌더링 될때마다 useState도 같이 호출 -> 초기값 전달 -> 내부적으로 전달된 값이 있따면 새로 호출하는 초기값 무시
//   const todos = localStorage.getItem("todos");
//   return todos ? JSON.parse(todos) : [];
// }
