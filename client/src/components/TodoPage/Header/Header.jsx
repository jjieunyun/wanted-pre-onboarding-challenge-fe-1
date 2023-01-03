import React from "react";
import { useDarkMode } from "../../../context/DarkModeContext";
import styles from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({
  filters,
  filter,
  onFilterChange,
  setIsAdd,
  isAdd,
}) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>

      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
        <button onClick={() => setIsAdd(!isAdd)} className={styles.addTodo}>
          Add
        </button>
      </ul>
    </header>
  );
}
