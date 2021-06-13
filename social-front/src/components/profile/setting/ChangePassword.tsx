import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { actionTypes } from "../../../redux/auth/actions";

const ChangePassword = () => {
  const dispatch = useDispatch();

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm();

  const [oldPassword, setOldPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const onSubmit = () => {
    const data = {
      oldPassword,
      newPassword
    };
    dispatch({
      type: actionTypes.CHANGEPASSWORD,
      payload: data
    });
  };

  return (
    <div className="col-lg-9 col-md-9">
      <div className="tab-content">
        <div className="tab-pane fade show active" id="edit-profile">
          <div className="set-title">
            <h5>Change Password</h5>
            <span>People on Man Social will change your password in here</span>
          </div>
          <div className="stg-form-area">
            <form className="c-form" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Old PassWord</label>
                <div className="input-password">
                  <input
                    {...register("oldPassword", { required: true, minLength: 8 })}
                    maxLength={255}
                    type={showOldPassword ? "password" : "text"}
                    placeholder="Enter old password"
                    autoComplete="new-password"
                    defaultValue={oldPassword}
                    onChange={e => setOldPassword(e.currentTarget.value)}
                  />
                  <div
                    className="input-group-addon"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                  >
                    <i className="fa fa-eye-slash" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-danger">
                  {errors.oldPassword?.type === "required" &&
                    "Please enter your password."}
                  {errors.oldPassword?.type === "minLength" &&
                    "Password must more than or equal 8 characters"}
                </div>
              </div>
              <div>
                <label>New PassWord</label>
                <div className="input-password">
                  <input
                    {...register("newPassword", { required: true, minLength: 8 })}
                    maxLength={255}
                    type={showNewPassword ? "password" : "text"}
                    placeholder="Enter new password"
                    autoComplete="new-password"
                    defaultValue={newPassword}
                    onChange={e => setNewPassword(e.currentTarget.value)}
                  />
                  <div
                    className="input-group-addon"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    <i className="fa fa-eye-slash" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-danger">
                  {errors.newPassword?.type === "required" &&
                    "Please enter new password."}
                  {errors.newPassword?.type === "minLength" &&
                    "Password must more than or equal 8 characters"}
                </div>
              </div>
              <div>
                <label>Confirm PassWord</label>
                <div className="input-password">
                  <input
                    {...register("confirmPassword", {
                      required: true,
                      validate: value => value === watch("newPassword")
                    })}
                    maxLength={255}
                    type={showConfirmPassword ? "password" : "text"}
                    placeholder="Enter confirm password"
                    autoComplete="new-password"
                    defaultValue={confirmPassword}
                    onChange={e => setConfirmPassword(e.currentTarget.value)}
                  />
                  <div
                    className="input-group-addon"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <i className="fa fa-eye-slash" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-danger">
                  {errors.confirmPassword?.type === "validate" &&
                    "New passwoed and confirm password not match."}
                  {errors.confirmPassword?.type === "required" &&
                    "Please enter confirm password."}
                </div>
              </div>
              <div>
                <button type="submit" className="ml-0 btn-dark">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ChangePassword);
