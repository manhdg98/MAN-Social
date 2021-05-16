import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { actionTypes } from '../../redux/actions';

const Verify = props => {
  
  const dispatch = useDispatch();

  const [code, setCode] = useState("");
  let data = useSelector(state => state);
  
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = () => {
    const info = {
      code: code,
      email: data.email
    };

    dispatch({
      type: actionTypes.VERIFY,
      payload: info
    });
  }

  return (
    <div className="logout-f">
      <h4>
        <i className="fa fa-key" /> Verify your account
      </h4>
      <p>Please check your mail, and enter your code in hese</p>
      <div className="logout-form">
        <form className="again-login" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("code", { required: true, pattern: /^\d{6}$/ })}
            type="number" 
            placeholder="Enter your code..." 
            autoComplete="off"
            defaultValue={code}
            onChange={e => setCode(e.currentTarget.value)}
          />
          <div className="text-danger">
            {errors.code?.type === 'required' && "Please enter your code verify."}
            {errors.code?.type === 'pattern' && "Verify code has only 6 character."}
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button type="submit" className="mr-3 btn btn-dark btn-sm">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
