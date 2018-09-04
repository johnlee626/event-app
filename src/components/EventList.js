import React from 'react'
import PropTypes from 'prop-types'
import Event from './Event'

class EventList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
		this.props.fetchEvents()
		this.setState({ isLoading: false })
	}

	render() {
		return (
			<React.Fragment>
				<div style={{textAlign: 'center'}}>
				<table className="table table-striped">
				    <thead>
				        <tr>
				            <th>Event Name</th>
				            <th>League</th>									            
							<th>End Date</th>
				        </tr>
				    </thead>				    
				    <tbody>
				    	{
				    		this.props.events.length > 0 ? 
				    			this.props.events.map((event, index) =>
						    		<tr key={index}>
										<Event event={event} />
									</tr>

						    	)
							: <tr><td colSpan='3' style={{textAlign: 'center'}}>loading...</td></tr>
				    	}
				    </tbody>
				</table>
				</div>
			</React.Fragment>
		)		
		
	}
}

EventList.propTypes = {
	events: PropTypes.array
	
}

export default EventList