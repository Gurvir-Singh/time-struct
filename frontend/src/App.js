import React, {Component} from 'react';
import './App.css';
import Widgets from './Widgets/Widgets';
//import Button from 'antd/es/button';

class App extends Component {

  state = {
    CurrentWidget: "Calendar",
  };

  changeToWidget = (WidgetName) => {
      this.setState(
        {
          CurrentWidget: WidgetName
        }
      )
  };

  render(){

  return (

    <div className="App">
      <button onClick = {this.changeToWidget.bind(this, "Calendar")}>Calender</button>
      <button onClick = {this.changeToWidget.bind(this, "Tasks")}>Tasks</button>
      <button onClick = {this.changeToWidget.bind(this, "StickyNotes")}>Sticky Notes</button>

      <Widgets index = {this.state.CurrentWidget}/>

    </div>

  );

  }
}

export default App;
