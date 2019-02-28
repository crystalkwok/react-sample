
 import React, { Component } from 'react';
 import styled from 'styled-components'
 


 class IconBoxView extends Component {
    render () {
        const Icon = this.props.svg; 
        return (
          <div onClick={this.props.onClick} className={`${this.props.className} ${this.props.isActive && 'active'}`}> 
              <Icon />
          </div>
        )
      }
  }


  const IconBoxStyles = styled(IconBoxView)`
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
  
  
  
  export default IconBoxView;