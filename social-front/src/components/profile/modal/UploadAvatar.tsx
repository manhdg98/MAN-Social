import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { Modal, Avatar, Button, Image } from "antd";
import { profileTypes } from "../../../redux/profile/profileAction";

const UploadAvatar = props => {
  const dispatch = useDispatch();
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);

  const onChangePicture = e => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleOk = async () => {
    dispatch({
      type: profileTypes.UPLOAD_AVATAR,
      payload: picture
    });
    props.handleCancel();
  };

  return (
    <Modal
      title="Upload Avatar"
      visible={props.isModalVisible}
      onOk={handleOk}
      onCancel={props.handleCancel}
    >
      <div className="d-flex align-items-center w-100">
        {props.avatar ? (
          <div
            style={{
              borderRadius: "50px",
              overflow: "hidden",
              width: "100ox",
              height: "100px"
            }}
          >
            <Image
              width={100}
              height={100}
              style={{ borderRadius: "50px", overflow: "hidden", objectFit: "cover" }}
              id="avatar"
              src={imgData ? imgData : props.avatar}
            />
          </div>
        ) : (
          <Avatar
            size={100}
            icon={<UserOutlined />}
            className="d-flex align-items-center justify-content-center"
          />
        )}
        <div className="position-relative ml-3" style={{ cursor: "pointer" }}>
          <input
            type="file"
            accept="image/*"
            className="position-absolute w-100 h-100"
            style={{ zIndex: 1, opacity: 0, cursor: "pointer" }}
            onChange={onChangePicture}
          />
          <Button>Choose Avatar</Button>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(UploadAvatar);
