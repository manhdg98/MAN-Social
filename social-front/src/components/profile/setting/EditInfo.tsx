import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileTypes } from "redux/profile/profileAction";
import { Skeleton } from "antd";

const Content = () => {
  
  // get state
  let data: any;
  useSelector(state => (data = state));

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const [username, setUsername] = useState(data.profileReducer.info.username);
  const [gender, setGender] = useState(data.profileReducer.info.gender);
  const [education, setEducation] = useState(data.profileReducer.info.education);
  const [country, setCountry] = useState(data.profileReducer.info.username);
  const [state, setState] = useState(data.profileReducer.info.state);
  const [location, setLocation] = useState(data.profileReducer.info.location);
  const [job, setJob] = useState(data.profileReducer.info.job);
  const [about, setAbout] = useState(data.profileReducer.info.about);
  const [company, setCompany] = useState(data.profileReducer.info.company);
  const [dob, setBOB] = useState(data.profileReducer.info.dob);
  const [phone, setPhone] = useState(data.profileReducer.info.phone);

  // componentdidmound
  const dispatch = useDispatch();
  const onSubmit = () => {
    const info = {
      username,
      gender,
      education,
      country,
      state,
      location,
      job,
      about,
      company,
      dob,
      phone
    };
    dispatch({
      type: profileTypes.UPDATE_PROFILE,
      payload: info
    });
  };

  return (
    <div className="col-lg-9 col-md-9">
      <div className="tab-content">
        <div className="tab-pane fade show active" id="edit-profile">
          <div className="set-title">
            <h5>Edit Profile</h5>
            <span>People on Man Social will get to know you with the info below</span>
          </div>
          <div className="stg-form-area">
            { data.profileReducer.info ? 
              <form className="c-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label>Email Address</label>
                  <input 
                    disabled
                    maxLength={255}
                    type="text" 
                    placeholder="abc@pitnikmail.com" 
                    defaultValue={data.profileReducer.info.email}
                  />
                </div>
                <div>
                  <label>User Name</label>
                  <input
                    {...register("username", { required: true })}
                    maxLength={255}
                    type="text" 
                    placeholder="abc"
                    defaultValue={username}
                    onChange={e => setUsername(e.currentTarget.value)}
                  />
                </div>
                <div className="text-danger">
                  {errors.confirmPassword?.type === "required" && "Please enter confirm password."}
                </div>
                <div>
                  <label>Phone Number</label>
                  <input 
                    {...register("phone", { minLength: 8, maxLength: 8 })}
                    maxLength={255}
                    type="number" 
                    placeholder="0123456789" 
                    defaultValue={phone}
                    onChange={e => setPhone(e.currentTarget.value)}
                  />
                </div>
                <div className="text-danger">
                  {errors.confirmPassword?.type === "minLength" && "Phone must more than or equal 10 characters."}
                  {errors.confirmPassword?.type === "maxLength" && "Phone must less than or equal 11 characters."}
                </div>
                <div>
                  <label>Date of Birth</label>
                  <input 
                    type="date"
                    defaultValue={dob}
                    onChange={e => setBOB(e.currentTarget.value)}
                  />
                </div>
                <div>
                  <label>Gender</label>
                  <div className="form-radio">
                    <div className="radio">
                      <label>
                        <input 
                          type="radio" 
                          name="Gender" 
                          value="Male"
                          checked={gender==="Male"}
                          onChange={e => setGender(e.currentTarget.value)}
                        />
                        <i className="check-box" />
                        Male
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input 
                          type="radio" 
                          name="Gender" 
                          value="Female"
                          checked={gender==="Female"}
                          onChange={e => setGender(e.currentTarget.value)}
                        />
                        <i className="check-box" />
                        Female
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input 
                          type="radio" 
                          name="Gender" 
                          value="Custom" 
                          checked={gender==="Custom"}
                          onChange={e => setGender(e.currentTarget.value)}
                        />
                        <i className="check-box" />
                        Custom
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label>About your profile</label>
                  <textarea
                    rows={3}
                    placeholder="Write someting about yourself..."
                    defaultValue={about}
                    onChange={e => setAbout(e.currentTarget.value)}
                  />
                </div>
                <div>
                  <label>Country</label>
                  <select
                    defaultValue={country}
                    onChange={e => setCountry(e.currentTarget.value)}
                  >
                    <option value="country">Country</option>
                  </select>
                </div>
                <div>
                  <label>State</label>
                  <select
                    defaultValue={state}
                    onChange={e => setState(e.currentTarget.value)}
                  >
                    <option value="country">State</option>
                  </select>
                </div>
                <div>
                  <label>Location</label>
                  <textarea
                    rows={3}
                    placeholder="Enter your location..."
                    defaultValue={location}
                    onChange={e => setLocation(e.currentTarget.value)}
                  />
                </div>
                <div>
                  <label>Education</label>
                  <textarea
                    rows={3}
                    placeholder="Enter your education..."
                    defaultValue={education}
                    onChange={e => setEducation(e.currentTarget.value)}
                  />
                </div>
                <div>
                  <label>Job</label>
                  <input 
                    type="text" 
                    placeholder="Ex: IT." 
                    defaultValue={job}
                    onChange={e => setJob(e.currentTarget.value)}
                  />
                </div>
                <div>
                  <label>Company</label>
                  <input 
                    type="text"
                    placeholder="Ex: MAN Social team." 
                    defaultValue={company}
                    onChange={e => setCompany(e.currentTarget.value)}
                  />
                </div>
                <div>
                  <button type="submit" >
                    Save
                  </button>
                </div>
              </form> : <Skeleton paragraph={{ rows: 3 }} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Content);
