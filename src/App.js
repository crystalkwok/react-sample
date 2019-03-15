import React, { Component } from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import SideMenu from './Presentation/Shared/SideMenu';
import Button from './Presentation/Shared/Button';
import HandIcon from './Presentation/Icons/Hand';
import HashtagIcon from './Presentation/Icons/Hashtag';
import './App.css';


var classNames = require('classnames');

const HandIconCopy = () => <HandIcon />
const HashtagIconCopy = () => <HashtagIcon />

let sidebarItems = [
  {"svg": HandIconCopy, tag: 'hand'},
  {"svg": HashtagIconCopy, tag: 'hashtag'}
]



//It probably would've, the only issue would be now each icon is managing its own state... which can become a headache
//Example, if we did it the way you had it, every time we switch an icon to active, we'd have to deactivate the rest manually
//because each icon has its own state and all it knows is that I'm active right now ok
//1. App is your application, we want it to be the source of truth for all state as i row eh
//2. SideMenu, we're passing active from the app state, which holds the currently active icon and an onClick function that sets that active icon
//3. SideMenu is in charge of mapping over the options (coming from props) and passing the current activeIcon AND the onClick function
//So, SideMenu is getting the onClick from your App declaration i think so
//meaning this.props.onClick => () => this.setState({active: tag}) from App. Make sense? hmm why did we have to have onclick as a prop? OH so like, you put on click in app, but it really godes down to all the way....to iconbox? so its passed as a prop?
//So in react, a prop is just a reference. onClick within props, is a reference to the actual onClick value within the App component
 

//because IconBoxStyles wraps IconBox, so the component you want to use is IconBoxStyles, that's why your renderer here, we're using IconBoxStyles now

//i think so! 

//so, we said props are refs. nah, all good

//so your onClick is just a reference, it's declared in App, passed to SideMenu, passed to IconBox

//so within sidemenu, we passed the tag from the object, which is what we're setting to the active within the App state
//() => onClick(option.tag) <- that part, the arrow function is a wrapper so that the function isn't just called automatically whenever it renders

// so, when you call a function
//let's say we have function callCrystal() {}
//to execute the function, we'd have to write callCrystal() right? si
//if we were to just write callCrystal <- this is just a reference to the function callCrystal ok
//so, we have () => callCrystal()
//if I made the onClick={callCrystal()}, this would just execute whenever the component renders/mounts
//because it's a function call with open parens 

//if we're to do onClick={() => callCrystal()}, now it's a function that will call your function when it's triggered
//haha, no. because whenever a component mounts, it registers all your props. so it sees onClick(), it's just gonna call the function
//that's why we need the () =>
//yeee, that's from ES6, it's called a fat arrow function. it's a way of writing an anoynymous function, so you don't have to write function callCrystal(), you can just do () => { whatevs } were you gunna finish this sentence? haha

//so basically....calling hte function the way we've been taught is a no no LOL
//haha in component architecture, yeah. because you want the functions to be references in the component. The function calls should be within

//so, we have function references within each of your icon components. each component has its own version of the function

//HandIcon's onClick={'hand' => this.props.onClick('hand')}
//HashtagIcon's onClick={'hashtag' => this.props.onClick('hashtag')} :)
//so, any time each of those components are clicked, it sends that tag all the way back to App
//App takes it, sets it as the currently active thing in state, then sends the currentlyActive tag back
//Each component gets it and if it's different that the old prop, then each Icon renders. Which is why your colors change onClick
//() => this.setState({}) <- that guy
//In App, it's not a reference, it's a declaration. So actually clicking it, will trigger the function


class TopBar extends Component {
  render () {
    const classNameTest = this.props.className;
    var componentClasses = classNames(
      'component', `${classNameTest}`
    );

    return (
      <div className = {componentClasses}>
        <p>{this.props.title}</p>
        <p>{this.props.username}</p>
        
      </div>
    )
  }
}

const TopBarStyled = styled(TopBar)`
  background-color:#fff;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.2);
  height: 64px;
  justify-content:space-between;
`

class Project extends Component {
  constructor () {
    super ();
  }

  render () {
    const classNameTest = this.props.className;
    var componentClasses = classNames(
      'component', `${classNameTest}`
    );

    return (
      <div className = {componentClasses} >
        <p>{this.props.projectName}</p>
        <div class="buttons">
          { this.props.cancelOption ? (<Button type = "tertiary" action = "Cancel"></Button>) : null }

          { this.props.actionButton ? (
            <Button type = "secondary" action = {this.props.actionButton}></Button>
          ) : null }
        </div>
      </div>
    )
  }
}

const ProjectStyled = styled(Project)`
  height:80px;
  display:flex;
  justify-content: space-between;

  .buttons button {
    margin-left:24px;
  }
`



class App extends Component {
  constructor() {
    super();

    this.state ={
      active: 'hand'
    }
  }
  render() {
    return ( 
        <div className = "body"> 
          <SideMenu options={sidebarItems} activeIcon={this.state.active} onClick={(tag) => this.setState({active: tag})}/>

          <div className="main">
            <TopBarStyled title="Admin" username="susannesolisman@bluebeam.com"/>
            <ProjectStyled projectName= "Rio Del Hotel" actionButton = "Create Project" cancelOption = {true}/>
          </div>
        </div>
    )
  }
}



export default App;
