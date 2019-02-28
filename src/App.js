import React, { Component } from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import IconBox from './IconBox';
import './App.css';


var classNames = require('classnames');

const HandIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12,20a8.89,8.89,0,0,1-6.26-2.52L.28,12.56a1.77,1.77,0,0,1,.07-2s.59-.78,1.87-.18h0a28.59,28.59,0,0,1,3,1.42,1.38,1.38,0,0,0,1,.16c.11-.07.18-.33.18-.68l0-.12h0A24.44,24.44,0,0,0,6,8.28L4.64,3.37a1.61,1.61,0,0,1,1-2,1.48,1.48,0,0,1,1.05,0,1.75,1.75,0,0,1,1,1L9.2,7.13l.12-5.87A1.57,1.57,0,0,1,11,0a1.64,1.64,0,0,1,1.44,1.51l0,5.95,1-4.7a1.54,1.54,0,0,1,.5-1,1.74,1.74,0,0,1,1.44-.35l.2.07a1.68,1.68,0,0,1,1,1.75L15.9,8.38l1.86-2.44.12-.07a1.48,1.48,0,0,1,1.71.2,1.61,1.61,0,0,1,.16,2l-1,1.81a11.75,11.75,0,0,0-1.32,3.84c0,2.16-1.15,6.27-5.25,6.27H12ZM1.45,11.77l5.21,4.72A7.78,7.78,0,0,0,12.1,18.6h.07c3.75,0,3.85-4.7,3.85-4.9a13.41,13.41,0,0,1,1.49-4.48l1-1.79a1,1,0,0,0,.09-.29L16.83,9.46a1.39,1.39,0,0,1-1.65.74,1.36,1.36,0,0,1-.7-1.66L15.2,3a.31.31,0,0,0-.12-.26.42.42,0,0,0-.19,0l0,.19-1,4.86a1.76,1.76,0,0,1-.76,1.4,1.09,1.09,0,0,1-.86.11c-.76-.14-1.08-1-1.11-1.67l-.06-6.13a.21.21,0,0,0-.18-.18.15.15,0,0,0-.19.11l-.11,5.85c0,1.1-.18,1.65-.64,1.9a.79.79,0,0,1-.53.09h0c-.77,0-1.24-.78-1.41-1.51l-1.65-5c-.06-.11-.13-.2-.18-.21C5.91,2.71,6,3,6,3L7.34,8a19.5,19.5,0,0,1,.44,3.34,2,2,0,0,1-.87,1.85A2.66,2.66,0,0,1,4.57,13a26.86,26.86,0,0,0-2.89-1.36,1.9,1.9,0,0,0-.27-.11A.71.71,0,0,0,1.45,11.77Zm-.16-.22Zm.16-.14v0Z"/></svg>
)

const HashtagIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.33,20a.69.69,0,0,1-.69-.7V.7A.7.7,0,1,1,6,.7V19.3A.7.7,0,0,1,5.33,20Z" transform="translate(0.01)"/><path d="M14.64,20a.7.7,0,0,1-.7-.7V.7a.7.7,0,1,1,1.39,0V19.3A.69.69,0,0,1,14.64,20Z" transform="translate(0.01)"/><path d="M19.29,6.05H.68a.7.7,0,0,1,0-1.4H19.29a.7.7,0,1,1,0,1.4Z" transform="translate(0.01)"/><path d="M19.29,15.35H.68a.7.7,0,0,1,0-1.4H19.29a.7.7,0,0,1,0,1.4Z" transform="translate(0.01)"/></svg>
)

const HandIconCopy = () => <HandIcon />
const HashtagIconCopy = () => <HashtagIcon />



let sidebarItems = [
  {"svg": HandIconCopy, tag: 'hand'},
  {"svg": HashtagIconCopy, tag: 'hashtag'}
]

class Button extends Component {

  components = {
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
