import React from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";

const Sidebar = () => {
  // get state
  let data: any;
  useSelector((state: any) => (data = state.profileReducer.info));

  return (
    <div className="col-lg-4 col-md-4">
      <aside className="sidebar">
        <div className="central-meta stick-widget">
          <span className="create-post">Personal Info</span>
          {data.username ? (
            <div className="personal-head">
              {data.about ? (
                <>
                  <span className="f-title">
                    <i className="fa fa-user" /> About Me:
                  </span>
                  <p>{data.about}</p>
                </>
              ) : (
                <></>
              )}
              {data.dob ? (
                <>
                  <span className="f-title">
                    <i className="fa fa-birthday-cake" /> Birthday:
                  </span>
                  <p>{data.dob}</p>
                </>
              ) : (
                <></>
              )}
              {data.phone ? (
                <>
                  <span className="f-title">
                    <i className="fa fa-phone" /> Phone Number:
                  </span>
                  <p>{data.phone}</p>
                </>
              ) : (
                <></>
              )}
              {data.gender ? (
                <>
                  <span className="f-title">
                    <i className="fa fa-male" /> Gender:
                  </span>
                  <p>{data.gender}</p>
                </>
              ) : (
                <></>
              )}
              {data.country ? (
                <>
                  <span className="f-title">
                    <i className="fa fa-globe" /> Country:
                  </span>
                  <p>
                    {data.state} {data.country}
                  </p>
                </>
              ) : (
                <></>
              )}
              {data.job ? (
                <>
                  <span className="f-title">
                    <i className="fa fa-briefcase" /> Occupation:
                  </span>
                  <p>{data.job}</p>
                </>
              ) : (
                <></>
              )}
              {data.createdAt ? (
                <>
                  <span className="f-title">
                    <i className="fa fa-handshake-o" /> Joined:
                  </span>
                  <p>{new Date(data.createdAt).toLocaleDateString()}</p>
                </>
              ) : (
                <></>
              )}
              {data.email ? (
                <>
                  <span className="f-title">
                    <i className="fa fa-envelope" /> Email &amp; Website:
                  </span>
                  <p>
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <Skeleton paragraph={{ rows: 3 }} />
          )}
        </div>
      </aside>
    </div>
  );
};

export default React.memo(Sidebar);
