import { createStore } from 'redux';
import rootReducers from '../reducers';

const configureStore = () =>{return{...createStore(rootReducers)}};

export default configureStore;