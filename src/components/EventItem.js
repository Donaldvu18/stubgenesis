import React from 'react';
import './EventItem.css';

const EventItem = ({event,selectEvent}) =>{
    return(

            <tr className='eventrow' onClick={()=> selectEvent(event)} >
            <td>{event.name}</td>
            <td>{event.ancestors.categories[0].name}</td>
            <td>{event.venue.name}</td>
            <td>{event.eventDateLocal}</td>

          </tr>
    )
}
export default EventItem;