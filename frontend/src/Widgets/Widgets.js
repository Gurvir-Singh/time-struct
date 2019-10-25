import React from 'react'
import Calendar from 'antd/es/calendar'
//import moment from 'moment';

const Widgets = (props) => {

  if (props.index === "Calendar"){

  return(

  <div className='CalendarWidget'>
    <Calendar 
    className='CalendarWidget'
    /*
    dateCellRender={dateCellRender}
    monthCellRender={monthCellRender}
    onPanelChange={onPanelChange}
    onSelect={onSelect}
    */
    fullscreen={false}
    />
  </div>

  );
  }


  if (props.index === "Tasks"){

    return(

      <div className="TasksWidget">
        <p>Tasks</p>
      </div>

    );

  }



if (props.index === "StickyNotes"){

  return(

    <div className="StickyNotesWidget">
      <p>Stickynotes</p>
    </div>
    
  );

  }


}


export default Widgets;
