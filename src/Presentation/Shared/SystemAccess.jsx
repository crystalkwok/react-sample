import React, { Component } from 'react';
import styled from 'styled-components';

var classNames = require('classnames');

const SystemAccessStyles = styled.div`
background-color:#fff;
box-shadow: 0 2px 10px 0 rgba(0,0,0,0.2);
height: 64px;
justify-content:space-between;
`

class SystemAccess extends Component {
    render () {
      const classNameTest = this.props.className;
      var componentClasses = classNames(
        'component', `${classNameTest}`
      );
  
      return (
        <SystemAccessStyles className = {componentClasses}>
          <p>{this.props.title}</p>
          <p>{this.props.username}</p>
          
        </SystemAccessStyles>
      )
    }
  }
  


export default SystemAccess;