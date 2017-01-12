import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = { search_input: '' }
	}

	onInputChange(input) {
		this.setState({ search_input: input });
		this.props.onVideoSearch(input);
	}
	render() {
		// console.log(this.props)
		return (
			<div className="search-bar">
				<input 
					value={this.state.search_input}
					onChange={event => this.onInputChange(event.target.value)}
				/>
			</div>
		)
	}
}

export default SearchBar;
