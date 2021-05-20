import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { actionTypes } from '../../redux/actions'

const LoginForm = props => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const { register, formState: { errors }, handleSubmit } = useForm()

  const onSubmit = (data) => {
    const info = {
      email,
      password
    }

    dispatch({
      type: actionTypes.LOGIN,
      payload: info
    })
  }

  return (
    <div className="logout-f">
      <h4><i className="fa fa-key"/>Login</h4>
      <p>Login again, you have recently signout from here</p>
      <div className="logout-form">
        <form className="again-login" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", {
              required: true, 
              pattern: /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/i
            })}
            maxLength="255"
            type="email" 
            placeholder="User Name" 
            autoComplete="off" 
            defaultValue={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
          <div className="text-danger">
            {errors.email?.type === 'required' && "Please enter your email."}
            {errors.email?.type === 'pattern' && "Email should be in the format 'abc@gmail.com'."}
          </div>
          <input 
            {...register("password", { required: true, minLength: 8 })}
            maxLength="255"
            type="password"
            placeholder="Enter your password"
            autoComplete="new-password"
            defaultValue={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
          <div className="text-danger">
            {errors.password?.type === 'required' && "Please enter your password."}
            {errors.password?.type === 'minLength' && "Password must more than or equal 8 characters"}
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button type="submit" className="mr-3 btn-dark">Login</button>
            <button onClick={  () => dispatch({
              type: actionTypes.TO_REGISTER
            })}
            className="btn-light"
            >Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm