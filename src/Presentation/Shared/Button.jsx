import React, { Component } from 'react';
import styled from 'styled-components'

const ButtonStyles = styled.button`
  
  
  height:48px;
  display:flex;
  flex-direction:row;

  p {
    margin:0;
    font-weight:600;
    text-transform:uppercase;
    letter-spacing:1px;
    font-size:14px;
    line-height:16px;
  }

  svg {
    height:16px;
    width:16px;
    margin-right:8px;
  }
`


const SecondaryButtonStyles = styled(ButtonStyles)`
  border: 1px solid #00579c;
  color:#00579c;
  padding: 0 24px;
  border-radius:4px;

  svg {
    fill: #00579c;
  }
`

const TertiaryButtonStyles = styled(ButtonStyles)`
  border:none;
  color:#00579c;

  svg {
    fill: #00579c;
  }
`

const PrimaryButtonStyles = styled(ButtonStyles)`
  border:none;
  background-color:#00579c;
  padding:0 24px;
  border-radius:4px;

  p {
    color:#fff;
  }

  svg {
    fill:#fff;
  }
`

class Button extends Component {
    components = {
        primary: PrimaryButtonStyles,
        secondary: SecondaryButtonStyles,
        tertiary: TertiaryButtonStyles
      }
    
      render () {
        const ButtonType = this.components[this.props.type];
        const Icon = this.props.svg;
        return (
          <ButtonType>
            {this.props.svg ? (<Icon /> ) : null}
            <p>{this.props.action}</p>
          </ButtonType>
        )
    }
}


export default Button;