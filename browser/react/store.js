import {createStore, applyMiddleware} from 'redux';
const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';
import initialState from "./initialState";
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

function reducer (prevState = initialState, action = {}){
  let newState;
  switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER: return Object.assign({}, prevState, {albums: action.albums});
    default: return prevState;
  }
}

let logger = createLogger();

let store = createStore(reducer, applyMiddleware(thunkMiddleware,logger));



export default store;