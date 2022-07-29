import React, { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    policy: false,
  });

  const changeHandler = (event) => {
    if (event.target.name === "policy") {
      setData({ ...data, policy: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  return (
    <div>
      <form>
        <h2>Sign Up</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Name"
            onChange={changeHandler}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            placeholder="Email"
            onChange={changeHandler}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={data.password}
            placeholder="Password"
            onChange={changeHandler}
          ></input>
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="text"
            name="confirmPassword"
            value={data.confirmPassword}
            placeholder="Confirm Password"
            onChange={changeHandler}
          ></input>
        </div>
        <div>
          <label>You accept our terms and conditions</label>
          <input
            type="checkbox"
            name="policy"
            value={data.policy}
            onChange={changeHandler}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
