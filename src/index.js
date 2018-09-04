import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import './index.css';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>		
		{Routes}
	</Provider>
, document.getElementById('root'));
registerServiceWorker();
