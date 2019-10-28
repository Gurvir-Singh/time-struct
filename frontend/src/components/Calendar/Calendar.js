import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from '@fullcalendar/interaction' 



const Calendar = (props) => {

    const dateClickHandler = (arg) => {

        const style = {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: 2147483647,
            display: 'block'
        }

        return (
            
            <p id="bruh" style={style}>test</p>

        );

    }

    return(
        <div className='CalendarWidget'>
            <h3>Click a date and add and event:</h3>
            <p>Date selected: {props.DayToAddEventTo}</p>
            <form>
                <input type='text' placeholder='Event Name'></input>
                <br></br>
                <input type='text' placeholder='Description'></input>
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