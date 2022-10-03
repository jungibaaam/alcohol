import React, { Component } from 'react';
import './MainTemplateFooter.css';

class MainTemplateFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.countUp = this.countUp.bind(this)
    }
    render() {
        return (
            <footer className="maintemplate-footer">
                <button type="button" onClick={this.countUp} class="footer-menu">Home{this.state.count}</button>
                <button type="button" onClick={this.countUp} class="footer-menu">Community</button>
                <button type="button" onClick={this.countUp} class="footer-menu">Search</button>
                <button type="button" onClick={this.countUp} class="footer-menu">Mypage</button>
            </footer>
        );
    }
    countUp(event) {
        this.setState({
            count: this.state.count + 1
        });
    }
}
const container = document.querySelector("#root");
export default MainTemplateFooter;