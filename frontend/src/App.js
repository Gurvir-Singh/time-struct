import React, {Component} from 'react';
import './App.css';
import Widgets from './Widgets/Widgets';
//import Button from 'antd/es/button';

class App extends Component {


  /*
  Defines the default state as Calendar which makes the 
  Calendar widget render when first opeing the webpage/app
  Has one attribute called Current Widget which takes a string
  */
  state = {
    CurrentWidget: "Calendar",
  };


  /*
  Event handler for when a button for a different widget is clicked.
  Takes in a parameter for which widget to switch too
  */
  switchWidgetHandler = (WidgetToChangeToo) => {
      this.setState(
        {
          CurrentWidget: WidgetToChangeToo
        }
      )
  };

  render(){

  return (

    <div className="App">
      {
        /*
        Each button corresponds to a different widget.

        The buttons all call the switchWidgetHandler and use binding to pass in 
        which widget to change to. 

        This in turn causes the state to change and the React-DOM to reload

        */
      }
      <button onClick = {this.switchWidgetHandler.bind(this, "Calendar")}>Calender</button>
      <button onClick = {this.switchWidgetHandler.bind(this, "Tasks")}>Tasks</button>
      <button onClick = {this.switchWidgetHandler.bind(this, "StickyNotes")}>Sticky Notes</button>

      {
        /*

        Renders the Widgets component which takes in the CurrentWidget attribute of the state.

        */
      }
      <Widgets WidgetName = {this.state.CurrentWidget}/>

    </div>

  );

  }
}

export default App;
