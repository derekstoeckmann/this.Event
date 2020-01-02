import React, { Component } from 'react';
import Map from '../components/Map.js';

class CreateEvent extends Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat: 33.4484, lng: -112.0740}}
					height='300px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default CreateEvent;