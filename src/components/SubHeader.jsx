import React from 'react';
import { useLocation } from 'react-router-dom';
import './SubHeader.css';

const SubHeader = () => {
    const location = useLocation();

    const getPageName = () => {
        switch (location.pathname) {
            case '/about':
                return 'About Me';
            case '/project':
                return 'Project';
            case '/webcloning':
                return 'Web Cloning';
            case '/webcloning-detail':
                return 'Web Cloning Detail';
            case '/contact':
                return 'Contact';
            default:
                return 'Project';
        }
    };

    return (
        <div className='sub_header'>
            <div className='sub_header_inner'>
                <div className='home_top_p2 gradient-bg-vertical'>{getPageName()}</div>
                <div>
                    <b className='gradient-bg-vertical'>FRONT END 주니어 개발자</b>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
