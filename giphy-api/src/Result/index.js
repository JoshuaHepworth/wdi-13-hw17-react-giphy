import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'

class Results extends Component {
	constructor(){
	    super();
	    this.state = {
	        search: ''
	    }
	}

    render(){
    	console.log(this.props.gifs)
    	const gifs = this.props.gifs.map((gif, i) => {
    			return (
    				<div>
    				<iframe class="gif-pics"src={gif.embed_url} width="480" height="355" frameBorder="0" class="giphy-embed" allowFullScreen>
    				</iframe>
    				<p>
    				<a class="gifs"href={gif.url}>via GIPHY</a>
    				</p>
    				</div>
    				)
    	})
    	console.log(this.getResults)
        return (
        	<div>
        	{/*<Grid container columns={10} textAlign='center' verticalAlign='top'>*/}
        
        		
        		{gifs}
	      
	      
        	</div>
        )
    }
}
export default Results;
