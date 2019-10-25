import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'  

const Widgets = (props) => {

  if (props.WidgetName === "Calendar"){

  return(

  <div className='CalendarWidget'>
    <FullCalendar 
    defaultView="dayGridMonth"
    plugins={[dayGridPlugin]}
    events={[
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]}
    />
  </div>

  );
  }


  if (props.WidgetName === "Tasks"){

    return(

      <div className="TasksWidget">
        <p>Tasks</p>
      </div>

    );

  }



if (props.WidgetName === "StickyNotes"){

  return(

    <div className="StickyNotesWidget">
      <p>Stickynotes</p>
    </div>
    
  );

  }


}


export default Widgets;
