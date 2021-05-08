import React from "react";
import * as toastify from "../../common/toastify";

const LoginForm = props => {
  return (
    <div className="logout-f">
      <h4>
        <i className="fa fa-key" /> Login
      </h4>
      <p>Login again, you have recently signout from here</p>
      <div className="logout-form">
        <div className="again-login">
          <input type="text" placeholder="User Name" autoComplete="off" />
          <input type="password" placeholder="Password" autoComplete="new-password" />
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button
              type="submit"
              className="mr-3 btn btn-dark btn-sm"
              onClick={() => toastify.toastifySuccess()}
            >
              Login
            </button>
            <a
              onClick={props.changeType}
              className="btn btn-light btn-sm"
              style={{ cursor: "pointer" }}
            >
              Create New Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
