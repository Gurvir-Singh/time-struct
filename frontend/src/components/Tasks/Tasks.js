import React from 'react'
//import Popover from '@fullcalendar/daygrid/Popover';



const Tasks = props => {


    

    return (        
        <div className='TasksWidget'>   
            {
                props.tasks.map(
                    tasks => (
                        <p>{tasks.tasks}</p>
                    )
                )
            }
        </div>
    );

};

export default Tasks;