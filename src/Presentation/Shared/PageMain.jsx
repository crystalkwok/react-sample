import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

var classNames = require('classnames');

const MainStyled = styled.div`
height:80px;
display:flex;
justify-content: space-between;

.buttons {

  display:flex;
  flex-direction:row-reverse;

  button {
    margin-left:24px;
  }
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

      const {buttons} = this.props;
  
      return (
        <MainStyled className = {componentClasses} >
          <p>{this.props.projectName}</p>
          {this.props.buttons ? (
             <div class="buttons">
                {buttons.map(
                  (button, i) => <Button
                                  key={i}                  
                                  type={button.type} 
                                  action={button.action}
                                  />
                )}
             </div>
          ): null }
        </MainStyled>
      )
    }
  }
  

export default PageMain;