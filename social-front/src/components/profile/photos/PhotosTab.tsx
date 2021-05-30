import React, { Fragment, useState } from 'react';
import Sidebar from './Sidebar';
import { ContentTabImage }  from '../ProfileConstants';
import ListAvatar  from './ListAvatar';

const PhotosTab = () => {
    const [childtab, setChildTab] = useState(ContentTabImage.AVATAR);
    const showContent = (key: string) => {
        switch (key) {
            case ContentTabImage.AVATAR:
                return <ListAvatar/>
                break;
            case ContentTabImage.BACKGROUND:
                return 
                break;
            case ContentTabImage.TIMELINE:
                return 
                break;
            default:
                break;
        }
    }

    return (
        <Fragment>
            <Sidebar childTab={childtab} changeChildTab={setChildTab}/>
            {showContent(childtab)}
        </Fragment>
    );
};

export default PhotosTab;