import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RecenLogin from "./RecenLogin";
import Register from "./Register";
import Verify from "./Verify";

const PageLogin = () => {
  const TypeEnum = { LOGIN: "login", REGISTER: "register", VERRIFY: "verify" };
  const [Type, setType] = useState(TypeEnum.LOGIN);

  const showForm = () => {
    if (Type === TypeEnum.LOGIN) {
      return <LoginForm changeType={() => setType(TypeEnum.REGISTER)} />;
    } else if (Type === TypeEnum.REGISTER) {
      return (
        <Register
          changeTypeToLogin={() => setType(TypeEnum.LOGIN)}
          changeTypeToVerify={() => setType(TypeEnum.VERRIFY)}
        />
      );
    } else if (Type === TypeEnum.VERRIFY) {
      return <Verify changeType={() => setType(TypeEnum.LOGIN)} />;
    }
  };

  return (
    <>
      <section>
        {console.log(TypeEnum.LOGIN)}
        <div className="page-header">
          <div className="header-inner">
            <h2>Now You are out of Pitnik</h2>
            <p> Discover what's happining right now in the world. </p>
          </div>
          <figure>
            <img src="images/resources/baner-forum.png" />
          </figure>
        </div>
      </section>
      <section>
        <div className="gap gray-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="offset-lg-1 col-lg-10">
                <div className="row border-center">
                  <div className="col-lg-6 col-md-6">
                    <RecenLogin />
                  </div>
                  <div className="col-lg-6 col-md-6">{showForm()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageLogin;
