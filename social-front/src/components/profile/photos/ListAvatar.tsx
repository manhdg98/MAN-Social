import React, { useEffect, useState, useRef } from 'react';
import { getMultipleFiles } from 'common/fileUpload';
import config from "../../../common/config.json";
import { Skeleton, Image } from 'antd';

function ListAvatar(props) {

    // fetch API Img
    const [listImgAvatar, setListImgAvatar] = useState(null);
    async function fetchImg() {
        const resImgAvatar: any = await getMultipleFiles(config.type_img.avatar, localStorage.getItem(config.local_storage._ID));
        setListImgAvatar(resImgAvatar);
    }
    useEffect(() => {
        fetchImg();
    }, []);

    return (
        <div className="col-lg-9">
            <div className="central-meta">
                <div className="title-block">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="align-left">
                                <h5>Photos <span>{ listImgAvatar != null ?  listImgAvatar.length : 0 }</span></h5>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row merged20 justify-content-end">
                                <div className="col-lg-7 col-md-7 col-sm-7">
                                    <form method="post">
                                        <input type="text" placeholder="Search Photo" />
                                        <button type="submit"><i className="fa fa-search" /></button>
                                    </form>
                                </div>
                                <div className="col-lg-1 col-md-1 col-sm-1">
                                    <div className="option-list">
                                        <i className="fa fa-ellipsis-v" />
                                        <ul>
                                            <li className="active"><i className="fa fa-check" /><a href="#">Show Public</a></li>
                                            <li><a href="#">Show only Friends</a></li>
                                            <li><a href="#">Hide all Posts</a></li>
                                            <li><a href="#">Mute Notifications</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="central-meta">
                <div className="row merged5">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div className="item-box">
                            <div className="item-upload album">
                                <i className="fa fa-plus-circle" />
                                <div className="upload-meta">
                                    <h5>Upload new avatar.</h5>
                                    <span>its only take a few seconds!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    { listImgAvatar != null ? <> {
                        listImgAvatar.map((item, index) => (
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-2" key={index}>
                                <div className="item-box show-img">
                                    <a className="strip h-100">
                                        <img src={item.filePath} alt={item.fileName} className="h-100" style={{objectFit: 'cover'}}/> 
                                    </a>
                                    <div className="over-photo">
                                        <a href="#"><i className="fa fa-heart" /> 15</a>
                                        <span>20 hours ago</span>
                                    </div>
                                </div>
                            </div> 
                        )) } </> 
                    : <Skeleton /> }
                </div>
                <div className="lodmore">
                    <span>Viewing 1-15 of 62 Pictures</span>
                    <button className="btn-view btn-load-more" />
                </div>
            </div>
        </div>
    );
}

export default ListAvatar;
