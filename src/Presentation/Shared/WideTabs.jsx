import React, { Component } from 'react';
import styled from 'styled-components';

const WideTabsStyled = styled.div`
height:64px;
width:100%;
background-color: #f8f8f8;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;


p {
    letter-spacing:1px;
    height:64px;
    text-transform:uppercase;
    font-weight:400;
    font-size:14px;
    padding:0 40px;
    display:flex;
    align-items:center;
    margin:0;

    &.active {
        height:56px;
        color:#00579c;
        font-weight:400;
        border-bottom: 4px solid #00579c;
        margin-top:4px;
    }
}
`;

class WideTabs extends Component {
    render () {
        const {tabs, activeTab} = this.props;
        return (
            <WideTabsStyled>
                {tabs.map (
                    (tab,i) => <p key={i}
                                className = {(tab.key == activeTab) ? 'active' : null}  
                                onClick={() => this.props.onClick(tab.key)}
                                >{tab.option}
                                </p>
                )}
            </WideTabsStyled>
        )
    }
}

export default WideTabs;