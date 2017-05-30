import { RENDER_POST } from './../actions/index';

export default function(state=null, action){
	switch(action.type){
		case 'RENDER_POST':
			console.log('as');
			return action.payload.data;

		default:
			return state;
	}
}