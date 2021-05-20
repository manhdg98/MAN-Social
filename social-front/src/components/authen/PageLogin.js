import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import RecenLogin from "./RecenLogin";
import Register from "./Register";
import Verify from "./Verify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { actionTypes } from "redux/actions";

const PageLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: actionTypes.TO_LOGIN
    });
  }, []);

  let data = useSelector((state) => state);

  const showForm = () => {
    if (data === undefined || data.type === actionTypes.TO_LOGIN) {
      return <LoginForm/>;
    } else if (data.type === actionTypes.TO_REGISTER) {
      return <Register/>;
    } else if (data.type === actionTypes.TO_VERIFY) {
      return <Verify/>;
    }
  };

  return (
    <>
      <section>
        <div className="page-header">
          <div className="header-inner">
            <h2>Now You are out of Pitnik</h2>
            <p> Discover what's happining right now in the world. </p>
          </div>
          <figure>{/* <img src="images/resources/baner-forum.png" /> */}</figure>
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
                    <ToastContainer />
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
