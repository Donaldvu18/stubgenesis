import React from 'react';
import './App.css';
import Header from './Header.js';
import stubhub from '../apis/stubhub.js';
import EventList from './EventList.js';
import SearchForm from './SearchForm.js';
import SelectedEvents from './SelectedEvents.js';
import Comparison from './Comparison.js';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today= yyyy + '-' + mm + '-' + dd;

class App extends React.Component{
  state={
        events:[],
        selected:[],
        comparison:false
      }

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
    console.log(response);
    this.setState({events:response.data.events})
  }

  selectEvent = (event) => {
    this.setState({selected:[...this.state.selected,event]})
  }

  removeEvent= (event) => {
      let array = [...this.state.selected]; // make a separate copy of the array
      const newarray=array.filter(selected=>selected.id!==event.id)
      this.setState({selected:newarray})
      this.setState({comparison:false})
      // var index = array.indexOf(event.target.value)
      // if (index !== -1) {
      //   array.splice(index, 1);
      //   this.setState({people: array});
      // }
    }
  
  onComparison = () =>{
    this.setState({comparison:!this.state.comparison})
  }

  resetSelected = () =>{
    this.setState({selected:[]})
    this.setState({comparison:!this.state.comparison})
  }
  render(){
  return (
    <div className="App container">
        {/* <h1 onClick={() => this.onRequestAPI()}>Activate</h1> */}
        <Header/>
        <SearchForm onRequestAPI={this.onRequestAPI}/>
        <br/>
        {this.state.selected.length>0 ? <SelectedEvents onComparison={this.onComparison} resetSelected={this.resetSelected} comparison={this.state.comparison} removeEvent={this.removeEvent} selected={this.state.selected} /> : null}
        <br/>
        {this.state.comparison===true & this.state.selected.length===2 ? <Comparison selected={this.state.selected}/> :null}
        <EventList events={this.state.events} selectEvent={this.selectEvent}/>
    </div>
  );
}
}

export default App;
