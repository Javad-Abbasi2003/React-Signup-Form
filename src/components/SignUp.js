import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    setFocused({ ...focused, [event.target.name]: true });
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
      toastify("error", "Invalid data entered! Correct errors");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>Sign Up</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Name"
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.name && focused.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            placeholder="Email"
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.email && focused.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.password && focused.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            placeholder="Confirm Password"
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.confirmPassword && focused.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div>
          <label>You accept our terms and conditions</label>
          <input
            type="checkbox"
            name="policy"
            value={data.policy}
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.policy && focused.policy && <span>{errors.policy}</span>}
        </div>
        <div>
          <a href="/">Login</a>
          <button type="submit">Sign in</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
