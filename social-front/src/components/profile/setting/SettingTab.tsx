import React, { Fragment, useState } from 'react';
import EditInfo from './EditInfo';
import ChangePassword from './ChangePassword';
import Sidebar from './Sidebar';
import { ContentTabSetting }  from '../ProfileConstants';

const SettingTab = () => {
    const [childtab, setChildTab] = useState(ContentTabSetting.EDITINFO);
    const showContent = (key: string) => {
        switch (key) {
            case ContentTabSetting.EDITINFO:
                return <EditInfo/>
                break;
            case ContentTabSetting.CHANGEPASSWORD:
                return <ChangePassword/>
                break;
            default:
                break;
        }
    }

    return (
        <Fragment>
            <div className="col-12">
                <div className="central-meta">
                    <div className="about">
                        <div className="d-flex flex-row mt-2">
                            <Sidebar childTab={childtab} changeChildTab={setChildTab}/>
                            {showContent(childtab)}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SettingTab;