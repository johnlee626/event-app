import { connect } from 'react-redux'
import { fetchEvents } from '../actions'
import EventDetail from '../components/EventDetail'

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail)