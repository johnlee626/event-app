import axios from 'axios'
const FETCH_EVENTS = 'FETCH_EVENTS'

export const fetchEvents = () => async dispatch => {
	const res = await axios.get('https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/popular/')

	dispatch({ type: FETCH_EVENTS, events: res.data.results })
}
