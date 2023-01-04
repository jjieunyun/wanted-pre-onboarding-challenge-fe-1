import React from "react";
import { useDarkMode } from "../../../context/DarkModeContext";
import styles from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Header({
  filters,
  filter,
  onFilterChange,
  setIsAdd,
  isAdd,
}) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const deleteToken = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <header className={styles.header}>
      <div>
        <button onClick={toggleDarkMode} className={styles.toggle}>
          {!darkMode && <HiMoon />}
          {darkMode && <HiSun />}
        </button>
        <button className={styles.LogoutBtn} onClick={deleteToken}>
          Logout
        </button>
      </div>

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
