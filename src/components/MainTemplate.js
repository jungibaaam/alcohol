import React, { Component } from 'react';
import './MainTemplate.css';
import MainTemplateContents from './MainTemplateContents';
import MainTemplateHeader from './MainTemplateHeader';
import MainTemplateRecommend from './MainTemplateRecommend';
import MainTemplateFooter from './MainTemplateFooter';

class MainTemplate extends Component {
    render() {
        return(
            <body className="maintemplate-template">
                <MainTemplateHeader/>
                <div className="maintemplate-main">
                    <div className="maintemplate-recommend">
                        <MainTemplateRecommend/>
                    </div>
                    <div className="maintemplate-content">
                       <MainTemplateContents/>
                    </div>
                    {/* <div className="maintemplate-footer">
                        <MainTemplateFooter/>
                    </div> */}

                </div>
                <MainTemplateFooter/>
            </body>
        );
    }
}

export default MainTemplate;