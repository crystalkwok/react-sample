import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

var classNames = require('classnames');

const MainStyled = styled.div`
height:80px;
display:flex;
justify-content: space-between;

.buttons button {
  margin-left:24px;
}
`;

class PageMain extends Component {
    constructor () {
      super ();
    }
  
    render () {
      const classNameTest = this.props.className;
      var componentClasses = classNames(
        'component', `${classNameTest}`
      );
  
      return (
        <MainStyled className = {componentClasses} >
          <p>{this.props.projectName}</p>
          <div class="buttons">
            { this.props.cancelOption ? (<Button type = "tertiary" action = "Cancel"></Button>) : null }
  
            { this.props.actionButton ? (
              <Button type = "secondary" action = {this.props.actionButton}></Button>
            ) : null }
          </div>
        </MainStyled>
      )
    }
  }
  

export default PageMain;