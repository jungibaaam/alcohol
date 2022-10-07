import "./MainContent.css"
import "./MainRecommend"
import "./MainMiniCommunity"
import "./MainFooter"
import { useState } from "react";
import MainMiniCommunity from "./MainMiniCommunity";
import MainRecommend from "./MainRecommend";

function MainContent() {

    return (
        <div className="main-content">
            MainContent aa
            hi!
            <MainRecommend />
            middle
            <MainMiniCommunity />
            hi!
        </div>
    );
}

export default MainContent;