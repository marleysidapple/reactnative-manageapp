export const FETCH_ALL_POST = 'FETCH_ALL_POST';
import axios from 'axios';

export function showAllPost(){
	const request = axios.get('https://jsonplaceholder.typicode.com/posts');
	console.log(request);
	return {
		type: FETCH_ALL_POST,
		payload: request
	}
}