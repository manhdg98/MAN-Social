import React from "react";

const LoginForm = () => {
  return (
    <div>
      <section>
        <div className="page-header">
          <div className="header-inner">
            <h2>Now You are out of Pitnik</h2>
            <p> Discover what's happining right now in the world. </p>
          </div>
          <figure>
            <img src="images/resources/baner-forum.png" alt />
          </figure>
        </div>
      </section>
      {/* sub header */}
      <section>
        <div className="gap gray-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="offset-lg-1 col-lg-10">
                <div className="row border-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="already-log">
                      <h4>Recent Login</h4>
                      <p>
                        Next Time you login click your picture. To remove an account from
                        this page click cross.
                      </p>
                      <div className="log-user">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="user-log">
                              <i className="ti-close" title="Remove Account" />
                              <a href="#" title>
                                <img src="images/resources/author.jpg" alt />
                                <span>Adam James</span>
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
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="logout-f">
                      <h4>
                        <i className="fa fa-key" /> Login
                      </h4>
                      <p>Login again, you have recently signout from here</p>
                      <div className="logout-form">
                        <form method="post" className="again-login">
                          <input
                            type="text"
                            placeholder="User Name"
                            defaultValue="Adam James"
                          />
                          <input
                            type="password"
                            placeholder="Password"
                            defaultValue={12345678}
                          />
                          <button type="submit">Login</button>
                        </form>
                        <a href="#" title>
                          Create New Signup
                        </a>
                        <p>
                          By clicking Sign Up, you agree to our{" "}
                          <a href="#" title>
                            Terms &amp; Policy
                          </a>
                          . You may receive SMS notifications from us and can opt out at
                          any time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
