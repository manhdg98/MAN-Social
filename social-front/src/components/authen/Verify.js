import React from "react";

const Verify = props => {
  return (
    <div className="logout-f">
      <h4>
        <i className="fa fa-key" /> Verify your account
      </h4>
      <p>Please check your mail, and enter your code in hese</p>
      <div className="logout-form">
        <form method="post" className="again-login">
          <input type="number" placeholder="Enter your code..." autoComplete="off" />
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button type="submit" onClick={props.changeType}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
