import React, { Component } from 'react';
import styled from 'styled-components'
import logo from './logo.svg';

import HandIcon from './Presentation/Icons/Hand';
import HashtagIcon from './Presentation/Icons/Hashtag';

import SideMenu from './Presentation/Shared/SideMenu';
import SystemAccess from './Presentation/Shared/SystemAccess';
import PageMain from './Presentation/Shared/PageMain';
import WideTabs from './Presentation/Shared/WideTabs';

import './App.css';


var classNames = require('classnames');

let sidebarItems = [
  {"svg": HandIcon, tag: 'hand'},
  {"svg": HashtagIcon, tag: 'hashtag'}
]

let mainPageButtons = [
  {"type": 'secondary', "action": 'Right', "svg": HandIcon},
  {"type": 'tertiary', "action": 'Left'}
]

const pageTabOptions = [
  {"option": 'Published', "key": '0'},
  {"option": 'For Review', "key": '1'},
  {"option": 'Log', "key": '2'}
]



class App extends Component {
  constructor() {
    super();

    this.state = {
      activePage: 'hand',
      activePageTab: '0'
    }
  }
  render() {
    return ( 
        <div className = "body"> 
          <SideMenu options={sidebarItems} activeIcon={this.state.activePage} onClick={(tag) => this.setState({activePage: tag})}/>

          <div className="main">
            <SystemAccess title="Admin" username="susannesolisman@bluebeam.com"/>
            <PageMain projectName= "Rio Del Hotel" buttons = {mainPageButtons} />
            <WideTabs tabs = {pageTabOptions} activeTab = {this.state.activePageTab} onClick = {(key) => this.setState ({activePageTab: key}) }/>
          </div>
        </div>
    )
  }
}



export default App;
