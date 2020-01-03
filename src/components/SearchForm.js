import React from 'react';



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
        this.setState({dateStart:event.target.value});
    }
    handleChange_dateEnd = (event) => {
        this.setState({dateEnd:event.target.value});
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
                        <label for='Keyword' className='col-sm-2 col-form-label col-form-label-sm'>
                            Keyword:
                        </label>
                        <div>
                            <input type='text' class='form-control form-control-sm' placeholder='Keyword to Search by' id='Keyword' value={this.state.q} onChange={this.handleChange_q}/>
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
                            <input type='text' class='form-control form-control-sm' placeholder='YYYY-MM-DD' id='dateStart' value={this.state.dateStart} onChange={this.handleChange_dateStart}/>
                        </div>
                    </div>
                    <div class='form-group row'>
                        <label for='dateEnd' className='col-sm-2 col-form-label col-form-label-sm'>
                            End Date:
                        </label>
                        <div>
                            <input type='text' class='form-control form-control-sm' placeholder='YYYY-MM-DD' id='dateEnd' value={this.state.dateEnd} onChange={this.handleChange_dateEnd}/>
                        </div>
                    </div>
                    <input type='submit' value='Submit'/>
                </form>
                <br/>
            </div>
        )
    }
}

export default SearchForm;