import React from "react";
import { useState } from "react";
import Header from "../components/TodoPage/Header/Header";
import TodoList from "../components/TodoPage/TodoList/TodoList";
import styles from "./TodoPage.module.css";

const filters = ["all", "active", "completed"];

export default function TodoPage() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div className={styles.TodoPage}>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <div className={styles.container}>
        <div className={styles.left}>
          <TodoList filter={filter} />
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}
