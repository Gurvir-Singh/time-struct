import React, {Component} from 'react';
import './App.css';
import Widgets from './Widgets/Widgets';


class App extends Component {

  state = {
    CurrentWidget: "Calendar",
  };

  switchWidgetHandler = (switchedToWidget) => {
      this.setState(
        {
          CurrentWidget: switchedToWidget
        }
      )
  };

  render(){

  return (

    <div className="App">
      <div className="Buttons">
      <button onClick = {this.switchWidgetHandler.bind(this, "Calendar")}>Calender</button>
      <button onClick = {this.switchWidgetHandler.bind(this, "Tasks")}>Tasks</button>
      <button onClick = {this.switchWidgetHandler.bind(this, "StickyNotes")}>Sticky Notes</button>
      </div>
      <Widgets WidgetName = {this.state.CurrentWidget}/>
    </div>

  );

  }
}

export default App;
