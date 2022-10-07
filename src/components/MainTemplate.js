import React, { Component, useState, useEffect } from 'react';
import './MainTemplate.css';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import MainRecommend from './MainRecommend';
import MainMiniCommunity from './MainMiniCommunity';
import MainCommunitya from './MainCommunitya';
import MainSearch from './MainSearch';
import MainMypage from './MainMypage';
import MainFooter from './MainFooter';
import Article from './Article';
import Nav from './Nav'
import Create from './Create'
import Header from './Header'
import './MainFooter.css';

// MainTemplate, 기본적인 이벤트를 모두 처리하는 부분
function MainTemplate() {

    // main화면의 상태로 setMode 하기. 기본 상태 설정, 우리는 HOME화면 모드로 설정하면 된다
    const [mode, setMode] = useState
    ('HOME'); // welcome이라는 값이 mode에 들어가서 세팅
    // 기본으로 띄우는 컨텐츠는 null로 띄우지 않도록 설정
    let content = MainContent;

    // main화면일 경우 설정
    if(mode === 'HOME') {
        content = <MainContent />
    } else if(mode === 'COMMUNITY') {
        content = <MainCommunitya />
    } else if(mode === 'SEARCH') {
        content = <MainSearch />
    } else if(mode === 'MYPAGE') {
        content = <MainMypage />
    }
    // HTML 반환하는 부분, setMode와 onChangeMode로 설정
    return(
        <body className="maintemplate-template">
            <div className='maintemplate-header'>
                <MainHeader content="HOME" onChangeMode={() => {
                    setMode('HOME');
                }} />
            </div>
            <div className="maintemplate-content">
                {content}
            </div>
            {/* <div className='maintemplate-footer'>
                <MainFooter onChangeMode={(_menu) => {
                    setMode((_menu));                    
                    // 해당 메뉴의 인자를 받을 경우, {}를 통해 해당 메뉴로 이동할 수 있도록 설계해보기
                }} />
            </div> */}
            <footer className="main-footer">
                <a href="/HOME" onClick={(event) => {
                    event.preventDefault();
                    console.log("HomeButton");
                    setMode('HOME')
                }}
                >
                    <button className='footer-menu'>home</button>
                </a>
                <a href="/community" onClick={(event) => {
                    event.preventDefault();
                    console.log("CommunityButton")
                    setMode('COMMUNITY')
                }}
                >
                    <button className='footer-menu'>community</button>
                </a>
                <a href="/search" onClick={(event) => {
                    event.preventDefault();
                    console.log("SearchButton")
                    setMode('SEARCH')
                }}
                >
                    <button className='footer-menu'>search</button>
                </a>
                <a href="/mypgae" onClick={(event) => {
                    event.preventDefault();
                    console.log("MypageButton")
                    setMode('MYPAGE')
                }}
                >
                    <button className='footer-menu'>mypage</button>
                </a>
            </footer>
        </body>
        // <body className="maintemplate-template">
        //     <MainTemplateHeader/>
        //     <div className="maintemplate-main">
        //         <div className="maintemplate-recommend">
        //             <MainTemplateRecommend/>
        //         </div>
        //         <div className="maintemplate-content">
        //             <MainTemplateContents/>
        //         </div>
        //     </div>
        //     <MainTemplateFooter/>
        // </body>
    );
}
export default MainTemplate;