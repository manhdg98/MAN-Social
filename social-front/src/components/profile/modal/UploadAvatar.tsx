import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Modal, Avatar, Button, Image } from 'antd';
import { singleFileUpload } from "../../../common/fileUpload";
import config from "../../../common/config.json"
import * as toastify from '../../../common/toastify';

const UploadAvatar = (props) => {
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
    let formData = new FormData();
    formData.append("type", config.type_img.avatar);
    formData.append("file_id", localStorage.getItem(config.local_storage._ID));
    formData.append("file", picture);
    const res: any = await singleFileUpload(formData);
    if (200 <= res.status && res.status < 300) {
      toastify.toastifySuccess(res.data.message);
    } else {
      toastify.toastifyError(res.response.data.message ? res.response.data.message : res.response.data)
    }
    props.handleCancel();
    setImgData(null);
  };

  return (
    <Modal title="Upload Avatar" visible={props.isModalVisible} onOk={handleOk} onCancel={props.handleCancel}>
      <div className="d-flex align-items-center w-100">
        { imgData ? 
          <div style={{borderRadius: "50px", overflow: "hidden", width: '100ox', height: '100px'}}>
            <Image width={100} height={100} style={{borderRadius: "50px", overflow: "hidden", objectFit: 'cover'}} id="avatar" src={imgData} /> 
          </div> :
          <Avatar size={100} icon={<UserOutlined />} className="d-flex align-items-center justify-content-center"/>
        }
        <div className="position-relative ml-3" style={{cursor: "pointer"}}>
          <input type="file" accept="image/*"
            className="position-absolute w-100 h-100" 
            style={{zIndex: 1, opacity: 0, cursor: "pointer"}}
            onChange={onChangePicture}
          />
          <Button>Choose Avatar</Button>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(UploadAvatar);