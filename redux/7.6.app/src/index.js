import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reducer from './reducer.js';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import DevTools from './DevTools';
import { addComment } from './actions.js';

const store = createStore(
	reducer,
	DevTools.instrument()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	 document.getElementById('root')
);
store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
registerServiceWorker();

