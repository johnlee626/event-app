import React from 'react'
import PropTypes from 'prop-types'

class EventDetail extends React.Component {
	componentDidMount() {
		this.props.fetchEvents()
	}

	render() {
		return (		
			<React.Fragment>
				{this.props.events.map((event, index) => (event.id === this.props.match.params.id) ?  
		    					<span key={index}>
		    						<div>League: {event.parent_name}</div>
		    						<div>Event Name: {event.name}</div>		    						
		    						<div>Event End Date: {event.expires}</div>
		    					</span>
		    				: null
		    		
		    	)}
			</React.Fragment>
		)
	}
}

EventDetail.propTypes = {
	events: PropTypes.array
}

export default EventDetail