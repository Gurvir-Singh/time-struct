import React, {Component} from 'react';
import './App.css';
import Widgets from './Widgets/Widgets';
//import Button from 'antd/es/button';

class App extends Component {

  state = {
    Widget: 1,
  };

  changeToCalender = () => {
      this.setState(
        {
          Widget: 1
        }
      )
  };

  changeToTasks = () => {
    this.setState(
      {
        Widget: 2
      }
    )
  };

  changeToStickyNotes = () => {
    this.setState(
      {
        Widget: 3
      }
    )
  };


  render(){

  return (

    <div className="App">
      <button onClick = {this.changeToCalender}>Calender</button>
      <button onClick = {this.changeToTasks}>Tasks</button>
      <button onClick = {this.changeToStickyNotes}>Sticky Notes</button>

      <Widgets index = {this.state.Widget}/>

    </div>

  );

  }
}

export default App;
