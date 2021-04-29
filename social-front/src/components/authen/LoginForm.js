import React from "react";

const LoginForm = props => {
  return (
    <div className="logout-f">
      <h4>
        {" "}
        <i className="fa fa-key" /> Login{" "}
      </h4>
      <p>Login again, you have recently signout from here</p>
      <div className="logout-form">
        <form method="post" className="again-login">
          <input type="text" placeholder="User Name" autoComplete="off" />
          <input type="password" placeholder="Password" autoComplete="new-password" />
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button type="submit" className="mr-3">
              Login
            </button>
            <a
              onClick={props.changeType}
              className="text-primary"
              style={{ cursor: "pointer" }}
            >
              {" "}
              Create New Account{" "}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
