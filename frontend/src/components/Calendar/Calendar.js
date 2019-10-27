import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from '@fullcalendar/interaction' 

const Calendar = () => {

    const dateClickHandler = (arg) => {
        alert(arg.date)
    }

    return(
        <div className='CalendarWidget'>
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