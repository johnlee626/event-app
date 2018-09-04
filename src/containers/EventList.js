import { connect } from 'react-redux'
import { fetchEvents } from '../actions'
import EventList from '../components/EventList'

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList)