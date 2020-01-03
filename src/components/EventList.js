import React from 'react';
import EventItem from './EventItem';

const EventList = ({events,selectEvent}) =>{
    const renderedList=events.map(event=>{
        return <EventItem key={event.id} selectEvent={selectEvent} event={event}/>;
    })
    return(
        <div>
            <table className='table table-striped'>
                <thead className='thead-dark'>
                    <tr>
                    <th scope='col'>Event</th>
                    <th scope='col'>Event Type</th>
                    <th scope='col'>Venue</th>
                    <th scope='col-3'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedList}
                </tbody>
            </table>
        
        </div>
    )
}

export default EventList;
