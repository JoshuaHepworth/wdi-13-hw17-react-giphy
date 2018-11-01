import React, { Component } from 'react';
import './App.css';
import Search from './Search'
class App extends Component {
  constructor(){
    super();
    this.state = {
      gifs: '',
      userSearch: ''
    }
  }
  handleUserSearch = (searchQuery) => {
    this.setState({
      userSearch: searchQuery
    })
  }
  componentDidMount(){
      this.getGifs().then((gifs, search) => {
        console.log(gifs)
        this.setState({
          gifs: gifs
          // userSearch: search
        })
      })
    }
  getGifs = async () => {
    try {
      const apiKey = 'lcQiEYcXesjTo47YXsQilzLZtDIftHEx'
      const gifsFetch = await fetch("http://api.giphy.com/v1/gifs/search?q=" + this.state.userSearch + "&api_key=" + apiKey + "&limit=5")
      const gifsJson = await gifsFetch.json()
      return gifsJson
    } catch(e){
        return e
    }
        
  }
  render() {

    return (
      <div className="App">
        <h1>Giphy search</h1>
        <Search handleUserSearch={this.handleUserSearch} />
      </div>
    );
  }
}

export default App;
