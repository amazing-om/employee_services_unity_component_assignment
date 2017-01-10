import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

let initialState = {
	employeeFields: {name: '', designation: '', company: ''},
	employeeRecords: {employees:{'1': {name: 'Risi', designation: 'TL', company: 'Myntra'}}, employeeIds: ['1']}
}
let Store = createStore( reducers, initialState, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk)) );

export default Store;