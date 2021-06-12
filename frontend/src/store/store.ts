import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { currentVideoReducer } from "./currentVideo/currentVideoReducer";
import { playerReducer } from "./player/playerReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ player: playerReducer, currentVideo: currentVideoReducer })

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store;