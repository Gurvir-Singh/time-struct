import React, {Component} from 'react';
import './App.css';
import Widgets from './components/Widgets/Widgets.js';
import Axios from 'axios';
import getTodaysDate from './Today.js'
//import FullCalendar from '@fullcalendar/react';

class App extends Component {

  /*
  Defines the default state as Calendar which makes the 
  Calendar widget render when first opeing the webpage/app
  Has one attribute called Current Widget which takes a string
  */
  
  state = {
    CurrentWidget: "Calendar",
    eventDay: getTodaysDate()
  };

  switchWidgetHandler = (switchedToWidget) => {

      this.setState(
        {
          CurrentWidget: switchedToWidget
        }
      )
  }; 
  
  componentDidMount() {
    Axios.get('http://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    });

  }

  

  render(){

  return (

    <div className="App">
      <div className="Buttons">
        
        <button onClick = {this.switchWidgetHandler.bind(this, "Calendar")}>Calender</button>
        <button onClick = {this.switchWidgetHandler.bind(this, "Tasks")}>Tasks</button>
        <button onClick = {this.switchWidgetHandler.bind(this, "StickyNotes")}>Sticky Notes</button>
      </div>
      <Widgets WidgetName = {this.state.CurrentWidget} DayClickedOn={this.state.eventDay}/>
      <p>{this.state.eventDay}</p>
    </div>

  );
    
  }
}

 export default App;
