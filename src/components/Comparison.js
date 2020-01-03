import React from 'react';
import './Comparison.css';
const Comparison = ({selected}) =>{
    const event1=selected[0]
    const event2=selected[1]

    return(
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-4 text-center'>
                        <ul>
                            <li>{event1.name}</li>
                            <li>{event1.eventDateLocal.substring(0,10)}</li>
                            <li>{event1.venue.name}</li>
                            <li>{event1.venue.city}</li>
                            <li>{event1.ticketInfo.minListPrice}</li>
                            <li>{event1.ticketInfo.maxListPrice}</li>
                            <li>{event1.ticketInfo.totalTickets}</li>
                            <li>{event1.ticketInfo.totalListings}</li>
                        </ul>
                    </div>
                    <div id='metrics'
                     className='col-4 text-center'>
                        <ul>
                            <li>Event Title</li>
                            <li>Event Date</li>
                            <li>Venue</li>
                            <li>City</li>
                            <li>Min Listing Price</li>
                            <li>Max Listing Price</li>
                            <li>Total # Tickets</li>
                            <li>Total # Listings</li>
 
                        </ul>
                    </div>
                    <div className='col-4 text-center'>
                        <ul>
                            <li>{event2.name}</li>
                            <li>{event2.eventDateLocal.substring(0,10)}</li>
                            <li>{event2.venue.name}</li>
                            <li>{event2.venue.city}</li>
                            <li>{event2.ticketInfo.minListPrice}</li>
                            <li>{event2.ticketInfo.maxListPrice}</li>
                            <li>{event2.ticketInfo.totalTickets}</li>
                            <li>{event2.ticketInfo.totalListings}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comparison;