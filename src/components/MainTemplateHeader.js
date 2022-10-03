import React, { Component } from 'react';
import './MainTemplateHeader.css';

class MainTemplateHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        return (
            <header className="maintemplate-header">
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? '임시버튼' : '누르면바뀜'}
                </button>
                MainTemplateHeader
                <button className='button-position' onClick={this.handleClick}>
                    {this.state.isToggleOn ? '오른쪽버튼' : '바뀌었어용'}
                </button>
            </header>
        );
    }
}

export default MainTemplateHeader