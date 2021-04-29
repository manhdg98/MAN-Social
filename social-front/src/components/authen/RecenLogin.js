import React from "react";

const RecenLogin = () => {
  return (
    <div className="already-log">
      <h4>Recent Login</h4>
      <p>
        Next Time you login click your picture. To remove an account from this page click
        cross.
      </p>
      <div className="log-user">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="user-log">
              <i className="ti-close" title="Remove Account" />
              <a href="#" title>
                <img src="images/resources/author.jpg" />
                <span>Adam James</span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="user-log">
              <i className="ti-close" title="Remove Account" />
              <a href="#" title>
                <img src="images/resources/author2.jpg" />
                <span>Emma Watson</span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="user-add">
              <div>
                <i className="ti-plus" />
                <span>Add Account</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecenLogin;
