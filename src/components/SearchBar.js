import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = { search_input: 'test' }
	}
	render() {
		// console.log(this.state.search_input)
		return(
			<input 
				value={this.state.search_input}
				onChange={event => this.setState({ search_input: event.target.value })}
			/>
		)
	}
}

export default SearchBar;