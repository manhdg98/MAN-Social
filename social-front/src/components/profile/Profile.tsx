import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileTypes } from "redux/profile/profileAction";
import { contentPage } from "./ProfileConstants";
import { Button, Skeleton, Image } from "antd";
import UploadAvatar from "./modal/UploadAvatar";
import UploadBackground from "./modal/UploadBackground";

const Profile = props => {
  // tab
  const [tabactive, setTabactive] = useState(props.tab);
  const changeTabActive = tab => {
    setTabactive(tab);
    props.changeTab(tab);
  };

  // get state
  let data: any;
  useSelector(state => (data = state));

  // componentdidmound
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch api get info and avatar, background
    dispatch({ type: profileTypes.GET_INFO });
    dispatch({ type: profileTypes.GET_IMG });
  }, []);

  // show modal upload avatar
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModalUpdateAvatar = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // show modal upload background
  const [isModalUpdateBG, setIsModalUpdateBG] = useState(false);
  const showModalUpdateBG = () => {
    setIsModalUpdateBG(true);
  };
  const handleCancelUpdateBG = () => {
    setIsModalUpdateBG(false);
  };

  return (
    <div className="user-profile">
      <figure>
        <div className="edit-pp">
          <Button type="primary" onClick={showModalUpdateBG} className="hidden-btn-antd">
            <label className="fileContainer">
              <i className="fa fa-camera" />
            </label>
          </Button>
        </div>
        <div className="wrapper-background">
          {data.profileReducer.imgBackground ? (
            <Image id="background" src={data.profileReducer.imgBackground} />
          ) : (
            <Skeleton />
          )}
        </div>
        <ul className="profile-controls">
          <li>
            <div className="edit-seting" title="Edit Profile image">
              <i className="fa fa-sliders" />
              <ul className="more-dropdown">
                <li>
                  <a href="setting.html">Update Profile Photo</a>
                </li>
                <li>
                  <a href="setting.html">Update Header Photo</a>
                </li>
                <li>
                  <a href="setting.html">Account Settings</a>
                </li>
                <li>
                  <a href="support-and-help.html">Find Support</a>
                </li>
                <li>
                  <a className="bad-report" href="#">
                    Report Profile
                  </a>
                </li>
                <li>
                  <a href="#">Block Profile</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </figure>
      <div className="profile-section">
        <div className="row">
          <div className="col-lg-2 col-md-3">
            <div className="profile-author">
              {data.profileReducer.info.username && data.profileReducer.imgAvatar ? (
                <>
                  <div className="profile-author-thumb">
                    <div
                      className="rounded-circle border border-light"
                      style={{ overflow: "hidden" }}
                    >
                      <Image
                        id="background"
                        src={data.profileReducer.imgAvatar}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="edit-dp">
                      <Button
                        type="primary"
                        onClick={showModalUpdateAvatar}
                        className="hidden-btn-antd"
                      >
                        <label className="fileContainer m-0">
                          <i className="fa fa-camera" />
                        </label>
                      </Button>
                    </div>
                  </div>
                  <div className="author-content">
                    <a className="h4 author-name">{data.profileReducer.info.username}</a>
                    <div className="country">{data.profileReducer.info.email}</div>
                  </div>
                </>
              ) : (
                <Skeleton paragraph={{ rows: 3 }} />
              )}
            </div>
          </div>
          <div className="col-lg-10 col-md-9">
            <ul className="profile-menu">
              <li>
                <a
                  className={tabactive === contentPage.ABOUTTAB ? "active" : ""}
                  onClick={() => changeTabActive(contentPage.ABOUTTAB)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className={tabactive === contentPage.SETTING ? "active" : ""}
                  onClick={() => changeTabActive(contentPage.SETTING)}
                >
                  Setting
                </a>
              </li>
              <li>
                <a
                  className={tabactive === contentPage.PHOTOS ? "active" : ""}
                  onClick={() => changeTabActive(contentPage.PHOTOS)}
                >
                  Photos
                </a>
              </li>
            </ul>
            <ol className="folw-detail">
              <li>
                <span>Posts</span>
                <ins>101</ins>
              </li>
              <li>
                <span>Followers</span>
                <ins>1.3K</ins>
              </li>
              <li>
                <span>Following</span>
                <ins>22</ins>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Modal */}
      <UploadAvatar
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
        avatar={data.profileReducer.imgAvatar}
      />
      <UploadBackground
        handleCancel={handleCancelUpdateBG}
        isModalVisible={isModalUpdateBG}
        background={data.profileReducer.imgBackground}
      />
    </div>
  );
};

export default React.memo(Profile);
