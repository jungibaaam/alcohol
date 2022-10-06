import "./MainContent.css"
import "./MainRecommend"
import "./MainMiniCommunity"
import "./MainFooter"
import { useState } from "react";
import MainMiniCommunity from "./MainMiniCommunity";
import MainRecommend from "./MainRecommend";

function MainContent() {
    const [mode, setMode] = useState
    ('HOME');
    let content = 'HOME';
    if(mode === 'HOME') {
        content = <MainRecommend />
    } else if(mode === 'COMMUNITY') {
        content = <MainMiniCommunity />
    } else if(mode === 'SEARCH') {
        // content = <MainSearch />
    } else if(mode === 'MYPAGE') {
        // content = <MyPage />
    }

    return (
        <div className="main-content">
            MainContent aa
            hi!
            {content}
            <MainMiniCommunity />
            hi!
        </div>
    );
}

export default MainContent;