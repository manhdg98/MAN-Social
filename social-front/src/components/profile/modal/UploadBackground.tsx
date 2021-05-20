import React from 'react';
import { Modal } from 'antd';

const UploadAvatar = (props) => {

  return (
    <Modal title="Upload Background" visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Modal>
  );
};

export default React.memo(UploadAvatar);