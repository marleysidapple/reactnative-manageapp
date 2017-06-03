export const FETCH_ALL_POST = 'FETCH_ALL_POST';
import axios from 'axios';

//const ROOT_URL = 'http://localhost:8000/api/v1';
const ROOT_URL = 'https://jsonplaceholder.typicode.com';


export function showAllPost(){
	const request = axios.get(`${ROOT_URL}/comments`);
	return {
		type: FETCH_ALL_POST,
		payload: request
	}
}