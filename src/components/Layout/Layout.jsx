import React from "react";
import './Layout.css';
import {Topbar} from './Topbar/Topbar';
import {Body} from './Body/Body';

export const Layout = () => {
    return (
        <div className="layout">
            <Topbar/>
            {/* <Body/> */}
        </div>
    )
}