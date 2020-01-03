import React from 'react';
import './EventItem.css';

const EventItem = ({event,selectEvent}) =>{
    return(

            <tr className='eventrow' onClick={()=> selectEvent(event)} >
            <td>{event.name}</td>
            <td>{event.venue.name}</td>
            <td>{event.eventDateLocal.substring(0,10)}</td>

          </tr>
    )
}
export default EventItem;