import React from 'react';
import './SelectedEvent.css';

const SelectedEvents = ({selected,removeEvent,onComparison,comparison,resetSelected}) => {
    const renderedList=selected.map(event=>{
        return(
            <tr onClick={()=>removeEvent(event)} className='selectedrow'>
            <td>{event.name}</td>
            <td>{event.venue.name}</td>
            <td>{event.eventDateLocal.substring(0,10)}</td>
            </tr>
        );
    })
    const indicator=selected.length===2 ? 'thead-green':'thead-yellow'

    return(

        <div>
            <h3>Selected events to compare (Two Required):</h3>
            <table className='table table-striped'>
         <thead className={indicator}>
                    <tr>
                    <th scope='col'>Event</th>
                    <th scope='col'>Venue</th>
                    <th scope='col-3'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedList}
                </tbody>
            </table>
            {selected.length===2 ? (<button onClick={()=>onComparison()} type="button" class="btn btn-outline-secondary">Compare Events</button>): null}
            {comparison ? (<button id='clearbutton' onClick={()=>resetSelected()} type="button" class="btn btn-outline-danger">Clear Results</button>): null}
        </div>
    )

}

export default SelectedEvents;