import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

//local modules
import AppRoutes from './routes/AppRoutes';
import Store from './store';

let history = syncHistoryWithStore( browserHistory, Store );

render(<Provider store={Store}>
				<Router history={history} routes={AppRoutes} />
			</Provider>, 
		document.querySelector('#app-mount'));