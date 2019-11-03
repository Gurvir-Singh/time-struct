import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';

//import { timeAsMs } from '@fullcalendar/core/datelib/marker';
//import { newExpression } from '@babel/types';
import Tasks from './components/Tasks/Tasks.js'
import Calendar from './components/Calendar/Calendar.js'

class App extends Component {


  

  /*
  Defines the default state as Calendar which makes the 
  Calendar widget render when first opeing the webpage/app
  Has one attribute called Current Widget which takes a string
  */
  
  state = {
    CurrentWidget: "Calendar",
    EventToAddName: "",
    Events: [],
    Tasks: ["bruh"]
  };


  /*
  componentDidMount() {
    Axios.get("http://127.0.0.1:8000/api/events/")
    .then(response => {
      console.log(response)
      this.setState(
        {
          Events: response
        }
      )
    });
    
  }
  */

  switchWidgetHandler = (switchedToWidget) => {

      this.setState(
        {
          CurrentWidget: switchedToWidget
        }
      )
  }; 

  
  dateClickHandler = (arg) => {
    
     
    
    this.setState(
      {
        eventDay: arg.dateStr
      }
    ) 
    

    }
  

    addEventHandler = () => {

      let EventToAdd = {
        eventName: this.state.EventToAddName,
        eventDesc: "Birthday",
        eventDate: this.state.eventDay
      }
      
      console.log(EventToAdd)
      Axios
        .post("http://127.0.0.1:8000/api/events/", EventToAdd)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
       
      
     
    }

    changeNameHandler = event => {
      this.setState (
        {
          EventToAddName: event.target.value
        }
      )
    }




  render(){

    switch (this.state.CurrentWidget){

      case "Calendar":
  
        return(
  
        <div className='App'>
          <Calendar />
        </div>
  
        );
  
      
      case "Tasks":
  
        return(
  
        <div className="App">
          <div className="Buttons">        
            <button onClick = {this.switchWidgetHandler.bind(this, "Calendar")}>Calender</button>
            <button onClick = {this.switchWidgetHandler.bind(this, "Tasks")}>Tasks</button>
            <button onClick = {this.switchWidgetHandler.bind(this, "StickyNotes")}>Sticky Notes</button>
          </div>
          <Tasks tasks={this.state.Tasks}/>
        </div>
  
        );
  
  
      case "StickyNotes":
  
        return(
  
        <div className="App">
          <div className="Buttons">        
            <button onClick = {this.switchWidgetHandler.bind(this, "Calendar")}>Calender</button>
            <button onClick = {this.switchWidgetHandler.bind(this, "Tasks")}>Tasks</button>
            <button onClick = {this.switchWidgetHandler.bind(this, "StickyNotes")}>Sticky Notes</button>
          </div>
          
        </div>

          );
  
      
  
      default:
        return(
  
        <div className="App">
          <div className="Buttons">        
            <button onClick = {this.switchWidgetHandler.bind(this, "Calendar")}>Calender</button>
            <button onClick = {this.switchWidgetHandler.bind(this, "Tasks")}>Tasks</button>
            <button onClick = {this.switchWidgetHandler.bind(this, "StickyNotes")}>Sticky Notes</button>
          </div>
          
        </div>
        );
    }
    
  }
}

 export default App;
