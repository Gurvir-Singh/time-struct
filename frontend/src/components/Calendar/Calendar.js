import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from '@fullcalendar/interaction' 



const Calendar = () => {

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
            <form>
                <input type='text'></input>
                <input type='text'></input>
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