import React from 'react'
import Calendar from '../Calendar/Calendar.js' 
import StickyNotes from '../StickyNotes/StickyNotes.js'
import Tasks from '../Tasks/Tasks.js'

const Widgets = (props) => {

  switch (props.WidgetName){

    case "Calendar":

      return(

      <div className='CalendarWidget'>
        <Calendar />
      </div>

      );

    
    case "Tasks":

      return(

        <div className="TasksWidget">
          <Tasks />
        </div>

      );


    case "StickyNotes":

      return(

          <div className="StickyNotesWidget">
            <StickyNotes />
          </div>
          
        );

    

    default:
      return(

        <div className='CalendarWidget'>
           <Calendar />
        </div>
    
        );
  }

}


export default Widgets;
