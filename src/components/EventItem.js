import React from 'react';
import './EventItem.css';
import Expand from 'react-expand-animated';

const EventItem = ({event,selectEvent,expandEvent,selected}) =>{
    let renderedcat=event.ancestors.categories.map(cats=>{
        return(cats.name)})
    renderedcat=renderedcat.join(', ')
    
    // let renderedperf=event.performers.map(perf=>{
    //     return(perf.name)})
    // renderedperf=renderedperf.join(', ')
    // renderedperf= renderedperf.length==0 ?'NA': renderedperf
    const eventStyle={
        backgroundColor:"lightgray",
        marginLeft:'5rem',
        }
    const headcolor=selected.indexOf(event)!==-1 ? {backgroundColor:'lightgray',fontWeight:500} :null ;
    const pricerange='$' + event.ticketInfo.minListPrice + ' - $' + event.ticketInfo.maxListPrice
    const disp=selected.indexOf(event)!==-1 ? '' :'none'
    return(
            <React.Fragment>
            <tr style={headcolor} className='eventrow' onClick={()=> selectEvent(event)} >
                <td className='eventrowid'>{event.name}</td>
                <td>{event.ancestors.categories[0].name}</td>
                <td>{event.venue.name}</td>
                <td>{event.eventDateLocal}</td>
    
          
                
            </tr>
            
            <Expand open={selected.indexOf(event)!==-1} close={selected.indexOf(event)===-1}>
                    <div style={{marginLeft:"1rem",fontSize:'1rem'}}>
                        <p className='mt-2'>Categories: {renderedcat}</p>
                        {/* <p>Performers: {renderedperf}</p> */}
                        <p>Price Range: {pricerange}</p>
                        <p>Number of Tickets: {event.ticketInfo.totalTickets}</p>
                        <p>Number of Listings: {event.ticketInfo.totalListings}</p>
                        <button type="button" class="btn btn-primary mr-3 mb-3">Compare </button>
                        <button  type="button" class="btn btn-secondary mb-3">Analyze</button>
                    </div>
                </Expand>
         
      
        
        
            </React.Fragment>
    )
}
export default EventItem;