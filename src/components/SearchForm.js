import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class SearchForm extends React.Component{
    
    state={
        q:'',
        dateStart:'',
        dateEnd:'',
        city:''    
    };

    handleChange_q = (event) => {
        this.setState({q:event.target.value});
    }
    handleChange_city = (event) => {
        this.setState({city:event.target.value});
    }
    handleChange_dateStart = (event) => {
        this.setState({dateStart:event});
    }
    handleChange_dateEnd = (event) => {
        this.setState({dateEnd:event});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onRequestAPI(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div class='form-group row'>
                        <label for='Category' className='col-sm-2 col-form-label col-form-label-sm'>
                            Category:
                        </label>
                        <div>
                            <input type='text' class='form-control form-control-sm' placeholder='ex: "sports", "musicals"' id='Category' value={this.state.q} onChange={this.handleChange_q}/>
                        </div>
                    </div>
                    <div class='form-group row'>
                        <label for='City' className='col-sm-2 col-form-label col-form-label-sm'>
                            City:
                        </label>
                        <div>
                            <input type='text' class='form-control form-control-sm' placeholder='City' id='City' value={this.state.city} onChange={this.handleChange_city}/>
                        </div>
                    </div>
                    <div class='form-group row'>
                        <label for='dateStart' className='col-sm-2 col-form-label col-form-label-sm'>
                            Start Date:
                        </label>
                        <div>
                            <DatePicker placeholderText=' MM/DD/YYYY' selected={this.state.dateStart} onChange={this.handleChange_dateStart}/>
                        </div>
                    </div>
                    <div class='form-group row'>
                        <label for='dateEnd' className='col-sm-2 col-form-label col-form-label-sm'>
                            End Date:
                        </label>
                        <div>
                        <DatePicker placeholderText=' MM/DD/YYYY' selected={this.state.dateEnd} onChange={this.handleChange_dateEnd}/>
                        </div>
                    </div>
                    <input type='submit' value='Submit'/>
                </form>
               
            </div>
        )
    }
}

export default SearchForm;