import React, { Component } from 'react';
import IconBoxView from './IconBoxView';

class IconBox extends Component {
   render () {
       return (
         <IconBoxView svg = {this.props.svg}
                      onClick  = {this.props.onClick}
                      className= {`${this.props.className} ${this.props.isActive && 'active'}`}
                      />
       )
     }
 }
 
 export default IconBox;
