import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { isEmail, isEmpty } from "validator";

const Register = props => {
  const dispatch = useDispatch();

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const postInfor = () => {
    const info = {
      username,
      email,
      password,
      confirmPassword
    };

    // if(isEmail(email) || isEmpty(email)) {
    //   console.log('sai');
    //   return false
    // }

    dispatch({
      type: "REGISTER",
      payload: info
    });
  };

  return (
    <div className="logout-f">
      <h4>
        <i className="fa fa-key" /> Register{" "}
      </h4>
      <p>Create your account, to try app</p>
      <div className="again-login">
        <input
          type="text"
          placeholder="User Name"
          autoComplete="off"
          defaultValue={username}
          onChange={e => setName(e.currentTarget.value)}
        />
        <label id="noti_name"></label>
        <input
          type="email"
          placeholder="Enter your email"
          autoComplete="off"
          defaultValue={email}
          onChange={e => setEmail(e.currentTarget.value)}
        />
        <label id="noti_email"></label>
        <input
          type="password"
          placeholder="Enter your password"
          autoComplete="new-password"
          defaultValue={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <label id="noti_pass"></label>
        <input
          type="password"
          placeholder="Enter your confirm password"
          autoComplete="new-password"
          defaultValue={confirmPassword}
          onChange={e => setConfirmPassword(e.currentTarget.value)}
        />
        <label id="noti_name"></label>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <button className="mr-3 btn btn-dark btn-sm" onClick={() => postInfor()}>
            Sign in
          </button>
          <a
            className="btn btn-light btn-sm"
            style={{ cursor: "pointer" }}
            onClick={props.changeTypeToLogin}
          >
            Login in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
