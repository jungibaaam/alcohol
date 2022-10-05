import React, { Component } from 'react';
import './MainRecommend.css';
import whiskey from '../images/whiskey.jpeg';

function MainRecommend() {
    return (
        <div className="main-recommend">
            MainRecommend
            <img className="recommend-alcohol" alt="whiskey" src={whiskey}/>
        </div>
    );
}

export default MainRecommend;