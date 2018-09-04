import React from 'react'
import PropTypes from 'prop-types'

class Event extends React.Component {
	render() {
		return (		
			<React.Fragment>						
				<td><a href={`/event/${this.props.event.id}`}>{ this.props.event.name }</a></td>
				<td>{ this.props.event.parent_name }</td>
				<td>{ this.props.event.expires }</td>
			</React.Fragment>
		)	
	}
}

Event.propTypes = {
	event: PropTypes.object

}

export default Event