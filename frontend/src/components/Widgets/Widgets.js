import React from 'react'
import Calendar from '../Calendar/Calendar.js' 
import StickyNotes from '../StickyNotes/StickyNotes.js'
import Tasks from '../Tasks/Tasks.js'

const Widgets = (props) => {

  if (props.WidgetName === "Calendar"){

  return(

  <div className='CalendarWidget'>
    <Calendar />
  </div>

  );
  }

  if (props.WidgetName === "Tasks"){

    return(

      <div className="TasksWidget">
        <Tasks />
      </div>

    );

  }



if (props.WidgetName === "StickyNotes"){

  return(

      <div className="StickyNotesWidget">
        <StickyNotes />
      </div>
      
    );

    }


}


export default Widgets;
