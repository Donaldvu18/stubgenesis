import React from 'react';
import './EventItem.css';

const EventItem = ({event}) =>{
    const pars=event.eventDateLocal.substring(0,10);
    return(

            <tr className='eventrow'>
            <td>{event.name}</td>
            <td>{event.venue.name}</td>
            <td>{pars}</td>

          </tr>
    )
}
export default EventItem;