import React from 'react';
import EventItem from './EventItem';

const EventList = ({events,selectEvent,selected}) =>{
    const renderedList=events.map(event=>{
        return <EventItem key={event.id} selected={selected} selectEvent={selectEvent} event={event}/>;
    })
    return(
        <div>
            <table className='table table-hover'>
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
