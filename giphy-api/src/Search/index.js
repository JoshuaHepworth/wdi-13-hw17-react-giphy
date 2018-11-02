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
          <Form textAlign="middle" onSubmit={this.handleSubmit}>
          	<Form.Input type="text" name="userSearch" onChange={this.handleInput}value={this.state.userSearch} placeholder="Search.."/>
          	<div class='button-search'>
            <Button color="green" fluid icon="eye" verticalAlign="middle" style={{maxWidth: 300}} type="submit" value="Search"/>
        		</div>
        	</Form>
        )
    }
}
export default Search;