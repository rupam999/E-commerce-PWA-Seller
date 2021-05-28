import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import './css/LoadingStyle.css';

const Loading = (props) => {
    const {title = ""} = props;
    return (
        <div className="loading">
            <span className="loaderIcon">
                <LoadingOutlined />
            </span>
            {title ? <h3>{title}</h3> : <h3>Processing Your Request...</h3>}
        </div>
    );
}

export default Loading;