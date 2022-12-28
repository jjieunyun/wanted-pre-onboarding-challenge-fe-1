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
    setEmail({ ...email, value: text });

    if (!emailRegex.test(text) && text.length > 0) {
      setEmail({ ...email, isError: true });
    } else {
      setEmail({ ...email, isError: false });
    }
  };

  const handlePwValue = (e) => {
    const text = e.target.value;
    setPw({ ...pw, value: text });

    if (text.length > 0 && text.length < 8) {
      setPw({ ...pw, isError: true });
    } else {
      setPw({ ...pw, isError: false });
    }
  };

  const buttonValidation = () => {
    // !(!email.isError && !pw.isError) && email.value === "" && pw.value === "";
  };

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
          <button className={styles.signIn} type="button" disabled={true}>
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
