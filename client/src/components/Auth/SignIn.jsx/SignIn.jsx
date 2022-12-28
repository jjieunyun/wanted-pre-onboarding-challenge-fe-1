import React from "react";
import styles from "./SignIn.module.css";
import Logo from "../../../assets/Logo_ink.png";

export default function SignIn() {
  const handleLogin = (e) => {
    e.preventdefault();
  };

  return (
    <section className={styles.section}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" className={styles.logo_images} />
        <span className={styles.logo_title}>My Todo App</span>
        <img src={Logo} alt="logo" className={styles.logo_images} />
      </div>
      <form onSubmit={handleLogin}>
        <div className={`${styles.input} ${styles.id}`}>
          <label htmlFor="id">ID</label>
          <input type="text" placeholder="your Email" />
        </div>
        <div className={`${styles.input} ${styles.pw}`}>
          <label htmlFor="id">PW</label>
          <input type="password" placeholder="your Password" />
        </div>
        <div className={styles.buttons}>
          <button className={styles.signIn} type="submit">
            Sign In
          </button>
          <button className={styles.signUp}>Sign Up!</button>
        </div>
      </form>
    </section>
  );
}
