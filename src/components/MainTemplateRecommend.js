import React, { Component } from 'react';
import './MainTemplateRecommend.css';
import whiskey from '../images/whiskey.jpeg';

class MainTemplateRecommend extends Component {
    render() {
        return (
            <div className="maintemplate-recommned">
                MainTemplateRecommend
                <img className="recommend-alcohol" alt="whiskey" src={whiskey}/>
            </div>
        );
    }
}

export default MainTemplateRecommend;