import React, {Component} from 'react';
import './App.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from '@fullcalendar/interaction' 
import Axios from 'axios';
import getTodaysDate from './Today.js'


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

  
  dateClickHandler = (arg) => {
    
     
    
    this.setState(
      {
        eventDay: arg.dateStr
      }
    ) 
    

    }
  

    addEventHandler = () => {

      console.log 

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
                <input type='text' placeholder='Event Name'></input>
                <br></br>
                <input type='text' placeholder='Description'></input>
                <br></br>
                <button type="submit">Add event</button>                
            </form>
            
            <FullCalendar 
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin, interactionPlugin]}
                events={[
                { title: 'Congressional App Challenge Due', date: '2019-11-01' }
                ]}
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
