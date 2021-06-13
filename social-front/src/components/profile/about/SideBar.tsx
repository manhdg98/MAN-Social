import React from "react";

const Sidebar = () => {
  return (
    <div className="col-lg-4 col-md-4">
      <aside className="sidebar">
        <div className="central-meta stick-widget">
          <span className="create-post">Personal Info</span>
          <div className="personal-head">
            <span className="f-title">
              <i className="fa fa-user" /> About Me:
            </span>
            <p>
              Hi, I’m John Carter, I’m 36 and I work as a Digital Designer for the
              “dewwater” Agency in Ontario, Canada
            </p>
            <span className="f-title">
              <i className="fa fa-birthday-cake" /> Birthday:
            </span>
            <p>December 17, 1985</p>
            <span className="f-title">
              <i className="fa fa-phone" /> Phone Number:
            </span>
            <p>+1-989-232435234</p>
            <span className="f-title">
              <i className="fa fa-medkit" /> Blood group:
            </span>
            <p>B+</p>
            <span className="f-title">
              <i className="fa fa-male" /> Gender:
            </span>
            <p>Male</p>
            <span className="f-title">
              <i className="fa fa-globe" /> Country:
            </span>
            <p>San Francisco, California, USA</p>
            <span className="f-title">
              <i className="fa fa-briefcase" /> Occupation:
            </span>
            <p>UI/UX Designer</p>
            <span className="f-title">
              <i className="fa fa-handshake-o" /> Joined:
            </span>
            <p>December 20, 2001</p>
            <span className="f-title">
              <i className="fa fa-envelope" /> Email &amp; Website:
            </span>
            <p>
              <a href="wpkixx.html">www.wpkixx.com</a>{" "}
              <a
                href="http://wpkixx.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="ebbb829f858280ab92849e99868a8287c5888486"
              >
                [email&nbsp;protected]
              </a>
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default React.memo(Sidebar);
