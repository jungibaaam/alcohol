import React, { Component, useState, useEffect } from 'react';
import './MainTemplate.css';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import MainRecommend from './MainRecommend';
import MainMiniCommunity from './MainMiniCommunity';
import MainFooter from './MainFooter';
import Article from './Article';
import Nav from './Nav'
import Create from './Create'
import Header from './Header'

// MainTemplate, 기본적인 이벤트를 모두 처리하는 부분
function MainTemplate() {

    // main화면의 상태로 setMode 하기. 기본 상태 설정, 우리는 HOME화면 모드로 설정하면 된다
    const [mode, setMode] = useState
    ('HOME'); // welcome이라는 값이 mode에 들어가서 세팅
    
    const [id, setId] = useState();
    // create로 생성했을 때, 다음 인자를 넣어주기 위한 변수
    const [nextId, setNextId] = useState(null);
    // topics마다 값을 지정해줌, 여기서 home, community, search, mypage를 나눠주면 될 듯
    const [topics, setTopics] = useState([
        { id: 1, title: 'html', body: 'html is ...'},
        { id: 2, title: 'css', body: 'css is ...'},
        { id: 3, title: 'js', body: 'js is ...'},
    ]);

    // 기본으로 띄우는 컨텐츠는 null로 띄우지 않도록 설정
    let content = null;

    // main화면일 경우 설정
    if(mode === 'HOME') {
        content = <MainContent />
    } else if(mode === 'COMMUNITY') {
        content = <MainMiniCommunity />
    } else if(mode === 'SEARCH') {
        // content = <MainSearch />
    } else if(mode === 'MYPAGE') {
        // content = <MyPage />
    } else if(mode === 'READ') { // mode마다 각각 바뀔 수 있도록, 
        // 버튼이 눌릴 때마다 title과 body를 초기화
        let title, body = null;
        // 버튼이 눌렸을 시, 해당 id를 찾아서 title과 body를 변경해준다
        for (let i = 0; i < topics.length; i ++) {
            console.log(topics[i].id, id);
            if(topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        // content에 해당하는 내용을 적용시킴
        content = <Article title={title} body={body} />;
    } else if(mode === 'CREATE') { // 만약 모드가 community나 search 등 다른 경우
        content = (
            <Create onCreate={(_title, _body) => {
                const newTopic = { id: nextId, title: _title, body: _body };
                const newTopics = [...topics];
                newTopics.push(newTopic);
                setTopics(newTopics);
                setMode('READ');
                setId(nextId);
                setNextId(nextId + 1);
            }} />
        );
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
                <MainContent />
            </div>
            <div className='maintemplate-footer'>
                <MainFooter onChangeMode={(_menu) => {
                    setMode((_menu));
                    // 해당 메뉴의 인자를 받을 경우, {}를 통해 해당 메뉴로 이동할 수 있도록 설계해보기
                }} />
                </div>

            <Nav topics={topics} onChangeMode={(_id) => {
                setMode('READ');
                setId(_id);
            }} />
            {content}
            <a href="/create" onClick={(event) => {
                event.preventDefault();
                setMode('CREATE');
            }}
            >
                Create
            </a>
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