import React from 'react';
import './App.css';
import Header from './Header.js';
import stubhub from '../apis/stubhub.js';
import EventList from './EventList.js';
import SearchForm from './SearchForm.js';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today= yyyy + '-' + mm + '-' + dd;

class App extends React.Component{
  state={events:[]}

  onRequestAPI= async(term) =>{
    const startDate= term.dateStart? term.dateStart+'T00:00 TO ': today +'T00:00 TO '
    const endDate= term.dateEnd ? term.dateEnd+'T23:59' : today+'T23:59'
    const city= term.city ? term.city : 'Los Angeles'
    
    const response = await stubhub.get('/sellers/search/events/v3',{
      params:{
        q: term.q,
        dateLocal: startDate+endDate,
        city: city,
        sort:'eventDateLocal asc',
        parking:"False",
        rows:50
      },
      headers:{
        Authorization:'Bearer FFAg5inyQSYR10mS9fm1KsDAvr8D',
        Accept:'application/json'
    }
    });
    this.setState({events:response.data.events})
  }

  render(){
  return (
    <div className="App container">
        {/* <h1 onClick={() => this.onRequestAPI()}>Activate</h1> */}
        <Header/>
        <SearchForm onRequestAPI={this.onRequestAPI}/>
        <EventList events={this.state.events}/>
    </div>
  );
}
}

export default App;
