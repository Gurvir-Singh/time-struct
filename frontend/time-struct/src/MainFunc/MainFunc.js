import React from 'react'


const MainFunc = (props) => {
  if (props.index === 1){
  return(
  <div className='MainFunc'>
    <p>Calender</p>
  </div>
  );
  }
  if (props.index === 2){
    return(
    <p>Tasks</p>
    );
  }

}

export default MainFunc;
