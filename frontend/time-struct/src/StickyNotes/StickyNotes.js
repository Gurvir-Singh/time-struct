import React from 'react';

const StickyNotes = (props) => {
    return(
    <div className="StickyNotesWidget">
        {props.text}
    </div>
    );
}

export default StickyNotes;