import React, { Component } from 'react';
import styled from 'styled-components'

class Button extends Component {
    components = {
        primary: PrimaryButtonStyles,
        secondary: SecondaryButtonStyles,
        tertiary: TertiaryButtonStyles
      }
    
      render () {
        const ButtonType = this.components[this.props.type];
    
        return (
          <ButtonType>
            {this.props.action}
          </ButtonType>
        )
    }
}


const ButtonStyles = styled.button`
  font-size:14px;
  font-weight:600;
  text-transform:uppercase;
  letter-spacing:1px;
  height:48px;
`


const SecondaryButtonStyles = styled(ButtonStyles)`
  border: 1px solid #00579c;
  color:#00579c;
  padding: 0 24px;
  border-radius:4px;
`

const TertiaryButtonStyles = styled(ButtonStyles)`
  border:none;
  color:#00579c;
`

const PrimaryButtonStyles = styled(ButtonStyles)`
  border:none;
  background-color:#00579c;
  padding:0 24px;
  border-radius:4px;
`

export default Button;