import React from "react";

const Register = props => {
  return (
    <div className="logout-f">
      <h4>
        {" "}
        <i className="fa fa-key" /> Register{" "}
      </h4>
      <p>Create your account, to try app</p>
      <div className="logout-form">
        <form method="post" className="again-login">
          <input type="text" placeholder="User Name" autoComplete="off" />
          <input type="email" placeholder="Enter your email" autoComplete="off" />
          <input
            type="password"
            placeholder="Enter your password"
            autoComplete="new-password"
          />
          <input
            type="password"
            placeholder="Enter your confirm password"
            autoComplete="new-password"
          />
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button type="submit" className="mr-3" onClick={props.changeTypeToVerify}>
              Sign in
            </button>
            <a
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={props.changeTypeToLogin}
            >
              {" "}
              Login in{" "}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
