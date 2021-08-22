import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { actionTypes } from "../../redux/auth/actions";

const Register = () => {
  const dispatch = useDispatch();

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm();

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = () => {
    const info = {
      username,
      email,
      password,
      confirmPassword
    };
    dispatch({
      type: actionTypes.REGISTER,
      payload: info
    });
  };

  return (
    <div className="logout-f">
      <h4>
        <i className="fa fa-key" /> Register{" "}
      </h4>
      <p>Create your account, to try app</p>
      <form className="again-login" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: true })}
          maxLength={255}
          type="text"
          placeholder="User Name"
          autoComplete="off"
          defaultValue={username}
          onChange={e => setName(e.currentTarget.value)}
        />
        <div className="text-danger">
          {errors.email?.type === "required" && "Please enter your name."}
        </div>
        <input
          {...register("email", {
            required: true,
            pattern:
              /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/i
          })}
          maxLength={255}
          type="email"
          placeholder="Enter your email"
          autoComplete="off"
          defaultValue={email}
          onChange={e => setEmail(e.currentTarget.value)}
        />
        <div className="text-danger">
          {errors.email?.type === "required" && "Please enter your email."}
          {errors.email?.type === "pattern" &&
            "Email should be in the format 'abc@gmail.com'."}
        </div>
        <input
          {...register("password", { required: true, minLength: 8 })}
          maxLength={255}
          type="password"
          placeholder="Enter your password"
          autoComplete="new-password"
          defaultValue={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <div className="text-danger">
          {errors.password?.type === "required" && "Please enter your password."}
          {errors.password?.type === "minLength" &&
            "Password must more than or equal 8 characters"}
        </div>
        <input
          {...register("confirmPassword", {
            required: true,
            validate: value => value === watch("password")
          })}
          maxLength={255}
          type="password"
          placeholder="Enter your confirm password"
          autoComplete="new-password"
          defaultValue={confirmPassword}
          onChange={e => setConfirmPassword(e.currentTarget.value)}
        />
        <div className="text-danger">
          {errors.confirmPassword?.type === "validate" &&
            "Passwoed and confirm password not match."}
          {errors.confirmPassword?.type === "required" && "Please enter your password."}
        </div>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <button type="submit" className="mr-3 btn-dark">
            Register
          </button>
          <button
            className="btn-light"
            style={{ cursor: "pointer" }}
            onClick={() =>
              dispatch({
                type: actionTypes.TO_LOGIN
              })
            }
          >
            Login in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
