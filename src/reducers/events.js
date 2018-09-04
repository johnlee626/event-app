const events = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_EVENTS':
			return action.events
		default:
			return state
	}

}

export default events