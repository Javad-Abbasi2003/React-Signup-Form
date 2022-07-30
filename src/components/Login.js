import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUp.module.css";

import { validate } from "./validate";
import { toastify } from "./toastify";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const focusHandler = (event) => {
    setTimeout(
      () => setFocused({ ...focused, [event.target.name]: true }),
      100
    );
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      setTimeout(() => toastify("success", "successfully Logged in."), 500);
    } else {
      setFocused({
        email: true,
        password: true,
      });
      toastify("error", "Please fill in the following fields correctly!");
      console.log(errors);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.inputContainer}>
          <label>Email</label>
          <input
            className={
              errors.email && focused.email
                ? styles.textInputError
                : styles.textInput
            }
            type="text"
            name="email"
            value={data.email}
            placeholder="Email"
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.email && focused.email && (
            <span className={styles.errorSpan}>{errors.email}</span>
          )}
        </div>
        <div className={styles.inputContainer}>
          <label>Password</label>
          <input
            className={
              errors.password && focused.password
                ? styles.textInputError
                : styles.textInput
            }
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.password && focused.password && (
            <span className={styles.errorSpan}>{errors.password}</span>
          )}
        </div>
        <div className={styles.bottomButtons}>
          <Link to="/signup">Sign up</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
