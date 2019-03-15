import React, { Component } from 'react';
import styled from 'styled-components';

const IconBoxStyles = styled.div`
height:64px;
width:64px;
display:flex;
flex-direction:row;
justify-content: center;
align-items: center;

:hover {
  background-color:#fff;
}

&.active {
  background-color: #00579c; 

  svg {
    fill:#fff;
  }
}
`;

class IconBox extends Component {
    render () {
        const Icon = this.props.svg; 
        return (
          <IconBoxStyles onClick={this.props.onClick} className={`${this.props.className} ${this.props.isActive && 'active'}`}> 
              <Icon />
          </IconBoxStyles>
        )
    }
}

const Sidebar = styled.div`
  width:64px;
  height: 100%;
  background-color: #f8f8f8;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.2);
  position: absolute;
`;

class SideMenu extends Component {

    constructor (props) {
      super(props);
    }

    render () {
        const {options, activeIcon} = this.props;
        return (
          <Sidebar>
            <div className = "icons">
                {options.map(
                  (option, i) => <IconBox 
                                    svg={option.svg} 
                                    key={i}
                                    isActive={option.tag === activeIcon}
                                    onClick={() => this.props.onClick(option.tag)}
                                  />
                )}
            </div>
          </Sidebar>
    
        ) 
    }
}

export default SideMenu;

