import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ContentTabSetting }  from '../ProfileConstants';

const Sidebar = (props) => {
    const [childTabActive, setChildTabactive] = useState(ContentTabSetting.EDITINFO);
    const changeTabActive = (data) => {
        setChildTabactive(data)
        props.changeChildTab(data);
    }

    return (
    <div className="col-lg-4 col-md-4">
        <ul className="nav nav-tabs nav-tabs--vertical nav-tabs--left">
            <li className="nav-item">
                <a className={`${childTabActive === ContentTabSetting.EDITINFO ? "active" : ''} nav-link`} 
                    onClick={() =>  changeTabActive(ContentTabSetting.EDITINFO)}
                ><i className="fa fa-pencil" /> Edit Profile</a>
            </li>
            <li className="nav-item">
                <a className={`${childTabActive === ContentTabSetting.CHANGEPASSWORD ? "active" : ''} nav-link`} 
                    onClick={() =>  changeTabActive(ContentTabSetting.CHANGEPASSWORD)}
                ><i className="fa fa-lock" /> Change Password</a>
            </li>
        </ul>
    </div>
    );
};

export default React.memo(Sidebar);