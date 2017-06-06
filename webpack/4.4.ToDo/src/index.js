import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import {AppContainer} from 'react-hot-loader';

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept('./container/App', () => {
		const NextApp = require('./container/App').default;
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			document.getElementById('app')
		);
	});
}