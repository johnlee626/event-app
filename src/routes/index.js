import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'

const createRoutes = () => {
  return (
    <Router>
      <React.Fragment>
        <Route
          exact
          path='/'
          render={(props) => <App {...props} title='Popular Events' />}        
        />
        <Route
          path='/event/:id'
          render={(props) => <App {...props} title='Event Detail' />}
        />
      </React.Fragment>
    </Router>
  )
}

const Routes = createRoutes()

export default Routes