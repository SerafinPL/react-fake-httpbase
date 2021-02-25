import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';
 

 axios.interceptors.request.use(requestConfig => {
 	console.log(requestConfig);
 	// Edit sending request Config 

 	return requestConfig; // must return to send this else is not sended
 }, error => { // error dla błędów wysyłania
 	console.log(error);
 	return Promise.reject(error); // must return aby zadziałały lokalne wykrywacze errorów
 });

 axios.interceptors.response.use(responseConfig => {
 	console.log(responseConfig);
 	// Edit sending response Config 

 	return responseConfig; // must return to send this else is not sended
 }, error => { // error dla błędów odpowiedzi
 	console.log(error);
 	return Promise.reject(error); // must return aby zadziałały lokalne wykrywacze errorów
 });

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
