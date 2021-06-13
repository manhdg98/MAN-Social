import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Image } from "antd";
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
      type: profileTypes.UPLOAD_BACKGROUND,
      payload: picture
    });
    props.handleCancel();
  };

  return (
    <Modal
      title="Upload Background"
      visible={props.isModalVisible}
      onOk={handleOk}
      onCancel={props.handleCancel}
    >
      <div className="d-flex align-items-center w-100">
        {props.background ? (
          <Image
            style={{ width: "200px", height: "100px", objectFit: "cover" }}
            id="background"
            src={imgData ? imgData : props.background}
          />
        ) : (
          <div className="d-flex align-items-center">
            <i className="fa fa-picture-o" style={{ fontSize: "25px" }} />
          </div>
        )}
        <div className="position-relative ml-3" style={{ cursor: "pointer" }}>
          <input
            type="file"
            accept="image/*"
            className="position-absolute w-100 h-100"
            style={{ zIndex: 1, opacity: 0, cursor: "pointer" }}
            onChange={onChangePicture}
          />
          <Button>Choose Background</Button>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(UploadAvatar);
