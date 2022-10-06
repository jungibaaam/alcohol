import React, { Component, useState, useEffect } from 'react';
import './MainFooter.css';
function MainFooter(props) {
    const btn = '';
    // for(let i = 0; i < props.btns.length; i ++) {
    //     let i = props.btns[i];
    //     btn.push(
    //         <a href={t.title} onClick={(event) => {
    //             event.preventDefault();
    //             props.onChangeMode(String(event.target.menu));
    //         }}
    //         >
    //             {t.title}
    //         </a>
    //     )
    // }
    return (
        <footer className="main-footer">
            <a href="/HOME" onClick={(event) => {
                event.preventDefault();
                props.onChangeMode(String(event.target.menu));
                console.log("HomeButton");
                // setMode('HOME')
            }}
            >
                <button className='footer-menu'>home</button>
            </a>
            <a href="/community" onClick={(event) => {
                event.preventDefault();
                props.onChangeMode(String(event.target.menu));
                console.log("CommunityButton")
                // setMode('COMMUNITY')
            }}
            >
                <button className='footer-menu'>community</button>
            </a>
            <a href="/search" onClick={(event) => {
                event.preventDefault();
                // setMode('SEARCH')
            }}
            >
                <button className='footer-menu'>search</button>
            </a>
            <a href="/mypgae" onClick={(event) => {
                event.preventDefault();
                // setMode('MYPAGE')
            }}
            >
                <button className='footer-menu'>mypage</button>
            </a>
            {/* <button className='footer-menu'>community</button>
            <button className='footer-menu'>search</button>
            <button className='footer-menu'>mypage</button> */}
        </footer>
    );
}
const container = document.querySelector("#root");
export default MainFooter;