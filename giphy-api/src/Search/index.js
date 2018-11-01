import React, { Component } from 'react';


class Search extends Component {
	constructor(){
		super();
		this.state = {
			userSearch: ''
		}
	}
	handleSubmit = (e) => {
    e.preventDefault()
    this.props.getResults(this.state.userSearch)
    // console.log(this.state.userSearch)
  }
    handleInput = (e) => {
    this.setState ({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
    render(){
    	console.log(this.state)
        return(
          <form onSubmit={this.handleSubmit}>
          	<input type="text" name="userSearch" onChange={this.handleInput}value={this.state.userSearch} placeholder="Search.."/>
            <button type="submit">Search</button>
        	</form>
        )
    }
}
export default Search;