import React, { Component } from 'react';


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
    				<iframe src={gif.embed_url} width="480" height="355" frameBorder="0" class="giphy-embed" allowFullScreen>
    				</iframe>
    				<p>
    				<a href={gif.url}>via GIPHY</a>
    				</p>
    				</div>
    				)
    	})
    	console.log(this.getResults)
        return (
        	<div>
        	<h2>result</h2>
        	{gifs}
        	</div>
        )
    }
}
export default Results;
