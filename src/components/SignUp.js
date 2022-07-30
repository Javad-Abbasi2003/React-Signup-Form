import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUp.module.css";

import { validate } from "./validate";
import { toastify } from "./toastify";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    policy: false,
  });
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data]);

  const changeHandler = (event) => {
    if (event.target.name === "policy") {
      setData({ ...data, policy: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
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
      setTimeout(() => toastify("success", "successfully signed up."), 500);
    } else {
      setFocused({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        policy: true,
      });
      toastify("error", "Please fill in the following fields correctly!");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.title}>Sign Up</h2>
        <div className={styles.inputContainer}>
          <label>Name</label>
          <input
            className={
              errors.name && focused.name
                ? styles.textInputError
                : styles.textInput
            }
            type="text"
            name="name"
            value={data.name}
            placeholder="Name"
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.name && focused.name && (
            <span className={styles.errorSpan}>{errors.name}</span>
          )}
        </div>
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
        <div className={styles.inputContainer}>
          <label>Confirm Password</label>
          <input
            className={
              errors.confirmPassword && focused.confirmPassword
                ? styles.textInputError
                : styles.textInput
            }
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            placeholder="Confirm Password"
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.confirmPassword && focused.confirmPassword && (
            <span className={styles.errorSpan}>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.checkboxContainer}>
          <div className={styles.checkbox}>
            <label>
              I accept <span>terms of privacy policy</span>
            </label>
            <input
              className={styles.check}
              type="checkbox"
              name="policy"
              value={data.policy}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.policy && focused.policy && (
            <span className={styles.errorSpan}>{errors.policy}</span>
          )}
        </div>
        <div className={styles.bottomButtons}>
          <a href="/">Login</a>
          <button type="submit">Sign in</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
