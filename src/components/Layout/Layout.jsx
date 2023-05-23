import React, {useState} from "react";
import './Layout.css';
import {Topbar} from './Topbar/Topbar';
import {Body} from './Body/Body';

export const Layout = () => {

    const [renderBody,setRenderBody] = useState('');

    return (
        <div className="layout">
            <Topbar setRenderBody={setRenderBody}/>
            <Body renderBody={renderBody}/>
        </div>
    )
}