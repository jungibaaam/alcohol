import React, { Component, useState, useEffect } from 'react';
import './MainFooter.css';
function MainFooter() {
    return (
        <footer className="main-footer">
            <a href="/home" onClick={(event) => {
                event.preventDefault();
                // setMode('HOME')
            }}
            >
                <button className='footer-menu'>home</button>
            </a>
            <a href="/community" onClick={(event) => {
                event.preventDefault();
                // setMode('HOME')
            }}
            >
                <button className='footer-menu'>community</button>
            </a>
            {/* <button className='footer-menu'>community</button>
            <button className='footer-menu'>search</button>
            <button className='footer-menu'>mypage</button> */}
        </footer>
    );
}
const container = document.querySelector("#root");
export default MainFooter;