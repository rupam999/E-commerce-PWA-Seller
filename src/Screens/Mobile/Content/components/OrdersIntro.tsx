import React from 'react';
import { TagsOutlined } from '@ant-design/icons';
import './css/OrderIntroStyle.css';

const OrdersIntro = () => {
    return(
        <div className="mainDiv" style={{marginBottom: 5}}>
            <div className="parentDivOf3SubDiv">  

                <div className="productImageDiv">
                    <img 
                        src="https://image.flaticon.com/icons/png/512/172/172159.png"
                        width='80%'
                        className="productImage"
                    />
                </div>

                <div className="productDescription" style={{marginLeft: 10}}>
                    <h3 className="productHeading">Customer One</h3>
                    <h4>
                        <span className="mainPrice">&#8377; 1250 </span> 
                        <span className="mrpPrice"> 2500 </span>
                        <span className="offPercentage"> 36% off</span>
                    </h4>
                    <h4 className="smallHeading">Zipcode: 721424</h4>
                    <h4 className="smallHeading">Date: 25/10/2020</h4>
                </div>

            </div>

            <div className="offerTagline">
                <h3 className="offerTag"><span><TagsOutlined />&nbsp;</span>Tag Number 1256</h3>
            </div>

        </div>
    );
}

export default OrdersIntro;