import React from "react";

const Content = () => {
  return (
    <div className="col-lg-9 col-md-9">
      <div className="tab-content">
        <div className="tab-pane fade show active" id="edit-profile">
          <div className="set-title">
            <h5>Edit Profile</h5>
            <span>People on Man Social will get to know you with the info below</span>
          </div>
          <div className="stg-form-area">
            <form method="post" className="c-form">
              <div>
                <label>User Name</label>
                <input type="text" placeholder="jackcarter4023" />
              </div>
              <div>
                <label>Email Address</label>
                <input type="text" placeholder="abc@pitnikmail.com" />
              </div>
              <div>
                <label>Gender</label>
                <div className="form-radio">
                  <div className="radio">
                    <label>
                      <input type="radio" name="radio" />
                      <i className="check-box" />
                      Male
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="radio" />
                      <i className="check-box" />
                      Female
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="radio" />
                      <i className="check-box" />
                      Custom
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label>about your profile</label>
                <textarea
                  rows={3}
                  placeholder="write someting about yourself"
                  defaultValue={""}
                />
              </div>
              <div>
                <label>Location</label>
                <input type="text" placeholder="Ex.San Francisco, CA" />
              </div>
              <div>
                <label>Country</label>
                <select>
                  <option value="country">Country</option>
                </select>
              </div>
              <div>
                <button type="submit" data-ripple>
                  Cancel
                </button>
                <button type="submit" data-ripple>
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

export default React.memo(Content);
