import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import './css/LoadingStyle.css';

const Loading = () => {
    return (
        <div className="loading">
            <span className="loaderIcon">
                <LoadingOutlined />
            </span>
            <h3>Processing Your Request...</h3>
        </div>
    );
}

export default Loading;