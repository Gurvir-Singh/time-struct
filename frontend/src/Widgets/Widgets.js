import React from 'react'
import Calendar from 'antd/es/calendar'



const Widgets = (props) => {

  /*
  This function takes in properties from App.js to check for which state the app is in. 
  Uses this to determine which widget to return
  */


  //Checks for Calendar state
  if (props.WidgetName === "Calendar"){

  return(

  <div className='CalendarWidget'>
    <Calendar 
    className='CalendarWidget'
    fullscreen={false}
    />
  </div>

  );
  }

  //Checks for Tasks state
  if (props.WidgetName === "Tasks"){

    return(

      <div className="TasksWidget">
        <p>Tasks</p>
      </div>

    );

  }


  //Checks for Calendar state
  if (props.WidgetName === "StickyNotes"){

    return(

      <div className="StickyNotesWidget">
        <p>Stickynotes</p>
      </div>
      
    );

    }


}


export default Widgets;
