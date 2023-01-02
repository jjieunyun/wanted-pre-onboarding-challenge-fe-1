import React from "react";
import styles from "./SignIn.module.css";
import Logo from "../../../assets/Logo_ink.png";
import { useState } from "react";
import { emailRegex } from "../../../utils/emailRegex";

export default function SignIn() {
  const [email, setEmail] = useState({
    value: "",
    isError: false,
  });
  const [pw, setPw] = useState({
    value: "",
    isError: false,
  });
  const [isSignUp, setIsSignUp] = useState(false);

  const handleEmailValue = (e) => {
    const text = e.target.value;

    if ((!emailRegex.test(text) && text.length > 0) || text === "") {
      setEmail({ ...email, value: text, isError: true });
    } else {
      setEmail({ ...email, value: text, isError: false });
    }
  };

  const handlePwValue = (e) => {
    const text = e.target.value;

    if (text.length < 8 || text === "") {
      setPw({ ...pw, value: text, isError: true });
    } else {
      setPw({ ...pw, value: text, isError: false });
    }
  };

  console.log(email.isError);
  console.log(pw.isError);
  return (
    <section className={styles.section}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" className={styles.logo_images} />
        <span className={styles.logo_title}>My Todo App</span>
        <img src={Logo} alt="logo" className={styles.logo_images} />
      </div>
      <form>
        <div className={`${styles.input} ${styles.id}`}>
          <label htmlFor="id">ID</label>
          <input
            type="text"
            placeholder="your Email"
            onChange={(e) => handleEmailValue(e)}
          />
          <span
            className={styles.errorMessage}
            style={{ display: email.isError ? "block" : "none" }}
          >
            *이메일 주소를 확인해주세요.
          </span>
        </div>
        <div className={`${styles.input} ${styles.pw}`}>
          <label htmlFor="id">PW</label>
          <input
            type="password"
            placeholder="your Password"
            onChange={(e) => handlePwValue(e)}
          />
          <span
            className={styles.errorMessage}
            style={{ display: pw.isError ? "block" : "none" }}
          >
            *비밀번호를 확인해주세요.
          </span>
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.signIn}
            type="button"
            disabled={
              email.isError ||
              pw.isError ||
              email.value === "" ||
              pw.value === ""
            }
          >
            {isSignUp ? "Join" : "Login"}
          </button>
          {isSignUp || (
            <button
              className={styles.signUp}
              type="button"
              onClick={() => setIsSignUp(true)}
            >
              SignUp!
            </button>
          )}
          {isSignUp && (
            <button
              className={styles.signUp}
              type="button"
              onClick={() => setIsSignUp(false)}
            >
              LogIn!
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
