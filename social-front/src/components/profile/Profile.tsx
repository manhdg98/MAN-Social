import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from 'redux/actions';
import { contentPage } from './ProfileConstants';
import { Button } from 'antd';
import UploadAvatar from './modal/UploadAvatar';
import UploadBackground from './modal/UploadBackground';

const Profile = (props) => {
    // fetch api get info
    const [tabactive, setTabactive] = useState(props.tab);
    const dispatch = useDispatch();
    let data;
    useSelector((state) => data = state);
    useEffect(() => {
        dispatch({
            type: actionTypes.INFO
        });
    }, []);
    const changeTabActive = (data) => {
        setTabactive(data)
        props.changeTab(data);
    }

    // show modal upload avatar
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
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
    const handleOkUpdateBG = () => {
        setIsModalUpdateBG(false);
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
            <img alt="author" src="images/backgrounds/profile-image.jpg" />
            <ul className="profile-controls">
                <li><a href="#" title="Add friend" data-toggle="tooltip"><i className="fa fa-user-plus" /></a></li>
                <li><a href="#" title="Follow" data-toggle="tooltip"><i className="fa fa-star" /></a></li>
                <li><a className="send-mesg" href="#" title="Send Message" data-toggle="tooltip"><i className="fa fa-comment" /></a></li>
                <li>
                    <div className="edit-seting" title="Edit Profile image"><i className="fa fa-sliders" />
                        <ul className="more-dropdown">
                            <li><a href="setting.html">Update Profile Photo</a></li>
                            <li><a href="setting.html">Update Header Photo</a></li>
                            <li><a href="setting.html">Account Settings</a></li>
                            <li><a href="support-and-help.html">Find Support</a></li>
                            <li><a className="bad-report" href="#">Report Profile</a></li>
                            <li><a href="#">Block Profile</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <ol className="pit-rate">
                <li className="rated"><i className="fa fa-star" /></li>
                <li className="rated"><i className="fa fa-star" /></li>
                <li className="rated"><i className="fa fa-star" /></li>
                <li className="rated"><i className="fa fa-star" /></li>
                <li ><i className="fa fa-star" /></li>
                <li><span>4.7/5</span></li>
            </ol>
        </figure>
        <div className="profile-section">
            <div className="row">
                <div className="col-lg-2 col-md-3">
                    <div className="profile-author">
                    {(data != undefined && data.info != undefined) ? ( <>
                        <div className="profile-author-thumb">
                            <img alt="author" src="images/avatars/author.jpg" />
                            <div className="edit-dp">
                                <Button type="primary" onClick={showModal} className="hidden-btn-antd">
                                    <label className="fileContainer m-0">
                                        <i className="fa fa-camera" />
                                    </label>
                                </Button>
                            </div>
                        </div>
                        <div className="author-content">
                            <a className="h4 author-name">{data.info.username}</a>
                            <div className="country">{data.info.email}</div>
                        </div>
                    </> ) : <></> }
                    </div>
                </div>
                <div className="col-lg-10 col-md-9">
                    <ul className="profile-menu">
                        <li><a 
                            className={tabactive === contentPage.ABOUTTAB ? "active" : ''} 
                            onClick={() =>  changeTabActive(contentPage.ABOUTTAB)}
                        >About</a></li>
                        <li><a 
                            className={tabactive === contentPage.SETTING ? "active" : ''} 
                            onClick={() =>  changeTabActive(contentPage.SETTING)}
                        >Setting</a></li>
                    </ul>
                    <ol className="folw-detail">
                        <li><span>Posts</span><ins>101</ins></li>
                        <li><span>Followers</span><ins>1.3K</ins></li>
                        <li><span>Following</span><ins>22</ins></li>
                    </ol>
                </div>
            </div>
        </div>	
        {/* Modal */}
        <UploadAvatar handleCancel={handleCancel} isModalVisible={isModalVisible}/>
        <UploadBackground handleCancel={handleCancelUpdateBG} handleOk={handleOkUpdateBG} isModalVisible={isModalUpdateBG}/>
    </div>
    );
};

export default React.memo(Profile);