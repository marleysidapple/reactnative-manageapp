// 1. import combinereducer
// 2. import all other reducer
// 3. combine all other reducer using combinereducer
import { combineReducers } from 'redux';
import PostReducer from './post_reducer';



export default combineReducers({
	post: PostReducer
});
