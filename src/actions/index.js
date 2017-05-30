export const RENDER_POST = 'RENDER_POST';
import axios from 'axios';

const ROOT_URL = 'http://iamsiddy.com/api/managerapi/public/api/v1';

export function renderAllPost(){

	const request = axios.get(`${ROOT_URL}/posts`);
	console.log(request);
	return {
		type: 'RENDER_POST',
		payload: request
	};
}