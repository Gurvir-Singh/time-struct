import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from '@fullcalendar/interaction' 
import getTodaysDate from '../../Today.js'
//import state from '../../App.js'
//import getTodaysDate from '../../Today.js'

const Calendar = (props) => {
    const [ EventDayState, SetEventDayState ] = useState(
        {
            eventDay: getTodaysDate()
        }
    );
  
    const dateClickHandler = (arg) => {

        SetEventDayState(
            {
                eventDay: getTodaysDate()
            }
        );

    }

    return(
        <div className='CalendarWidget'>
            <h3>Click a date and add and event:</h3>
            <p>Date selected: {EventDayState}</p>
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