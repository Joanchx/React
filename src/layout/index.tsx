import React from 'react';

import { Routes } from '../lib/routes';
import IProps from './interface';

const Layout = (props: IProps) => {
    return (
        <div>
            Layout
            <Routes routes={props.routes} />
        </div>
    );
};

export default Layout;
