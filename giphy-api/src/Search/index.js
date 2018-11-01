import React, { Component } from 'react';
import {Button, Icon, Form} from 'semantic-ui-react'

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
            <Button fluid icon="trash alternate outline" verticalAlign="middle" style={{maxWidth: 300}} type="submit" value="Search"/>
        	</form>
        )
    }
}
export default Search;