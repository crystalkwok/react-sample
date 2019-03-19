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
    text-transform:uppercase;
    font-weight:400;
    font-size:14px;
    margin:0 40px;
}
`;

class WideTabs extends Component {
    render () {
        const {tabs} = this.props;
        return (
            <WideTabsStyled>
                {tabs.map (
                    (tab,i) => <p key={i}>{tab.option}</p>
                )}
            </WideTabsStyled>
        )
    }
}

export default WideTabs;