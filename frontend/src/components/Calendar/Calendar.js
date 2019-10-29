import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from '@fullcalendar/interaction' 
//import state from '../../App.js'
//import getTodaysDate from '../../Today.js'

const Calendar = (props) => {
    /*
    state = {
    eventDay: getTodaysDate()
    }

    
    const bruh = () => {   
        this.setState (
            {
                eventDay: "10-26-2019"
            }
        )
    }    
    */    

    const dateClickHandler = (arg) => {

        console.log(arg.date)

    }

    return(
        <div className='CalendarWidget'>
            <h3>Click a date and add and event:</h3>
            <p>Date selected: {props.DayToAddEventTo}</p>
            <form>
                <input type='text' placeholder='Event Name'></input>
                <br></br>
                <input type='text' placeholder='Description'></input>
                <br></br>
                <button>Add event</button>
            </form>
            <FullCalendar 
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin, interactionPlugin]}
                events={[
                { title: 'Congressional App Challenge Due', date: '2019-11-01' }
                ]}
                dateClick={dateClickHandler}
                
            />
  
        </div>
    );
    
};

export default Calendar;