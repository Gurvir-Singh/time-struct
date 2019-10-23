import React from 'react'
import Calendar from 'react-calendar'

const MainFunc = (props) => {

  if (props.index === 1){

  return(

  <div className='CalendarWidget'>
    <Calendar className='CalendarWidget'/>
  </div>

  );
  }


  if (props.index === 2){

    return(

      <div className="MainFunc">
        <p>Tasks</p>
      </div>

    );

  }



if (props.index === 3){

  return(

    <div className="MainFunc">
      <p>Stickynotes</p>
    </div>
    
  );

  }


}


export default MainFunc;
