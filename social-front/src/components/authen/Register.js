import React, { useState } from "react";
import { register,actionTypes } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Register = props => {
  const dispatch = useDispatch()
  
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const postInfor = () => {
    // props.changeTypeToVerify
    const info = {
      name: name,
      email: email,
      password: password
    }
    console.log(info);
    dispatch({ 
      type: actionTypes.REGISTER,
      payload: info
    })
  };

  return (
    <div className="logout-f">
      <h4><i className="fa fa-key" /> Register</h4>
      <p>Create your account, to try app</p>
      <div className="logout-form">
        <form method="post" className="again-login">
          <input 
            type="text" 
            placeholder="User Name" 
            autoComplete="off" 
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <input 
            type="email" 
            placeholder="Enter your email" 
            autoComplete="off" 
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            autoComplete="new-password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <input
            type="password"
            placeholder="Enter your confirm password"
            autoComplete="new-password"
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          />
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button type="submit" className="mr-3" onClick={() => postInfor()}>
              Sign in
            </button>
            <a
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={props.changeTypeToLogin}
            >
              Login in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
