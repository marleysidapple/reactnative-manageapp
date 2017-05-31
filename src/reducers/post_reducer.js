import { FETCH_ALL_POST } from './../actions';


export default function(state=null, action){
	switch(action.type){
		case FETCH_ALL_POST:
			console.log(action.payload);
		default:
			return state;
	}
}