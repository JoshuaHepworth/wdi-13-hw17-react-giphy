import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import Result from './Result'
class App extends Component {
  constructor(){
    super();
    this.state = {
      gifs: []
      // userSearch: ''
    }
  }
  handleUserSearch = (searchQuery) => {
    this.setState({
      userSearch: searchQuery
    })
  }
  getResults = (search) => {
      this.getGifs(search).then((gifs, search) => {
        console.log(gifs)
        this.setState({
          gifs: gifs.data
          // userSearch: search
        })
      })
    }
  getGifs = async (search) => {
    try {
      const query = search
      console.log(this.state)
      const apiKey = 'lcQiEYcXesjTo47YXsQilzLZtDIftHEx'
      const gifsFetch = await fetch("http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + apiKey + "&limit=5")
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
        <img src="https://vignette.wikia.nocookie.net/epicrapbattlesofhistory/images/c/c2/Peanut-butter-jelly-time.gif/revision/latest?cb=20141129150614"/>
        <Search getResults={this.getResults}handleUserSearch={this.handleUserSearch} searchFunc={this.getGifs}/>
        <Result getResults={this.getResults} gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
