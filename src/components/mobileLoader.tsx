import React from 'react';
import { ActivityIndicator } from 'antd-mobile';

const mobileLoader = () => (
    <div 
        style={{ 
            position: 'absolute', 
            width: '100%', 
            height: document.documentElement.clientHeight * 0.8, 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
      <ActivityIndicator size="large" />
    </div>

)

export default mobileLoader;