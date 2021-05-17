import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import SideBar from './about/SideBar';
import Content from './about/Content';
import { actionTypes } from 'redux/actions';

const UserProfile = () => {

    const dispatch = useDispatch();
    let data = useSelector((state) => state);
    useEffect(() => {
        dispatch({
            type: actionTypes.INFO
        });
    }, []);

    return (
    <section>
        <div className="gap2 gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row merged20" id="page-contents">
                            {/* user profile */}
                            <div className="user-profile">
                                <figure>
                                    <div className="edit-pp">
                                        <label className="fileContainer"> 
                                            <i className="fa fa-camera" />
                                            <input type="file" />
                                        </label>
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
                                            {data != undefined ? ( <>
                                                <div className="profile-author-thumb">
                                                    <img alt="author" src="images/avatars/author.jpg" />
                                                    <div className="edit-dp">
                                                    <label className="fileContainer">
                                                        <i className="fa fa-camera" />
                                                        <input type="file" />
                                                    </label>
                                                    </div>
                                                </div>
                                                <div className="author-content">
                                                    <a className="h4 author-name" href="about.html">{data.info.username}</a>
                                                    <div className="country">{data.info.email}</div>
                                                </div>
                                            </> ) : <></> }
                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-9">
                                            <ul className="profile-menu">
                                                <li>
                                                    <a className="" href="timeline.html">Timeline</a>
                                                </li>
                                                <li>
                                                    <a className="active" href="about.html">About</a>
                                                </li>
                                                <li>
                                                    <a className="" href="timeline-friends.html">Friends</a>
                                                </li>
                                                <li>
                                                    <a className="" href="timeline-photos.html">Photos</a>
                                                </li>
                                                <li>
                                                    <a className="" href="timeline-videos.html">Videos</a>
                                                </li>
                                                <li>
                                                    <div className="more">
                                                        <i className="fa fa-ellipsis-h" />
                                                        <ul className="more-dropdown">
                                                            <li>
                                                            <a href="timeline-groups.html">Profile Groups</a>
                                                            </li>
                                                            <li>
                                                            <a href="statistics.html">Profile Analytics</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ol className="folw-detail">
                                                <li><span>Posts</span><ins>101</ins></li>
                                                <li><span>Followers</span><ins>1.3K</ins></li>
                                                <li><span>Following</span><ins>22</ins></li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>	
                            </div>
                            {/*  */}
                            <SideBar/>
                            <Content/>
                        </div>
                    </div>
                </div>
            </div>
        </div>	
    </section>
    );
};

export default UserProfile;