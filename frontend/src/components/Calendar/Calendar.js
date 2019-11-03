import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from '@fullcalendar/interaction' 
import getTodaysDate from '../../Today.js'
import Axios from 'axios';

class Calendar extends Component {

    state = {
        eventDay: getTodaysDate(),
        events: [],
        eventName: "",
        serverResponded: false
    };
  
    dateClickHandler = (arg) => {

        this.setState(
            {
                eventDay: arg.dateStr
            }
        );

    }

    addEventHandler = () => {
        let EventToAdd = {
            eventName: this.state.eventName,
            eventDesc: "Desc",
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

    inputHandler = (event) => {
        this.setState(
            {
                eventName: event.target.value
            }
        );
    }
    
    componentDidMount() {
    fetch("http://127.0.0.1:8000/api/events/")
    .then(response => response.json())
    .then(response => {
      //console.log(response)
      this.setState(
        {
          events: response,
          
        }
      )
      this.state.events.map(event => {
          event['title'] = event['eventName']
          event['date'] = event['eventDate']
          delete event['eventName']
          delete event['eventDate']
          delete event['eventDesc']
          delete event['id']
          delete event['owner']
      })
      //console.log(this.state.events)
      this.setState(
          {
            serverResponded: true
          }
      )
    });
    }
    
    render(){
        //console.log(this.state.events)
        switch (this.state.serverResponded){
            case false:
                return(
                    <div className='loadingAnimation'>
                        <p>loading</p>
                    </div>
                );
                
            case true:
                return(
                    <div className='CalendarWidget'>
                        <h3>Click a date and add and event:</h3>
                        <p>Date selected: {this.state.eventDay}</p>
                        <form>
                            <input onChange={this.inputHandler}  type='text' placeholder='Event Name'></input>
                            <button onClick={this.addEventHandler}>Add Event</button>
                        </form>
                        
                        <FullCalendar 
                            defaultView="dayGridMonth"
                            plugins={[dayGridPlugin, interactionPlugin]}
                            events={this.state.events}
                            dateClick={this.dateClickHandler}
                            selectable="false"
                        />
            
                    </div>
                );
            }
    }
};

export default Calendar;