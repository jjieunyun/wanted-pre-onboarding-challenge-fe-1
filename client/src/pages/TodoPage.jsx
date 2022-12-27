import React from "react";
import { useState } from "react";
import Header from "../components/TodoPage/Header/Header";
import TodoList from "../components/TodoPage/TodoList/TodoList";

const filters = ["all", "active", "completed"];

export default function TodoPage() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div className="TodoPage">
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
    </div>
  );
}
