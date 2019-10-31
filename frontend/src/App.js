import React, {Component} from 'react';
import './App.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from '@fullcalendar/interaction' 
import Axios from 'axios';
import getTodaysDate from './Today.js'
//import { timeAsMs } from '@fullcalendar/core/datelib/marker';
//import { newExpression } from '@babel/types';


class App extends Component {


  

  /*
  Defines the default state as Calendar which makes the 
  Calendar widget render when first opeing the webpage/app
  Has one attribute called Current Widget which takes a string
  */
  
  state = {
    CurrentWidget: "Calendar",
    eventDay: getTodaysDate(),
    EventToAddName: "",
    Events: []

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
        title: this.state.EventToAddName,
        date: this.state.eventDay
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
  
        <div className="App">

          <div className="Buttons">        
            <button onClick = {this.switchWidgetHandler.bind(this, "Calendar")}>Calender</button>
            <button onClick = {this.switchWidgetHandler.bind(this, "Tasks")}>Tasks</button>
            <button onClick = {this.switchWidgetHandler.bind(this, "StickyNotes")}>Sticky Notes</button>
          </div>

          <div className='CalendarWidget'>
            <h3>Click a date and add and event:</h3>
            <p>Date selected: {this.state.eventDay}</p>
            <form onSubmit={this.addEventHandler}>
                <input id="EventName" type='text' placeholder='Event Name' onChange = {this.changeNameHandler}></input>
                <br></br>
                <button type="submit">Add event</button>                
            </form>
            
            <FullCalendar 
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin, interactionPlugin]}
                events={this.state.Events}
                dateClick={this.dateClickHandler}
                selectable="true"
            />
  
        </div>
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
