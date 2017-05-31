/*
* in order to read the data from the external api, we must use applyMiddleware, thunk and promise
*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Post from './components/Post';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from './reducers';

const store = applyMiddleware(thunk, promise)(createStore);

class App extends Component {

	constructor(props){
		super(props);
	}


	render(){
		return (
			<Provider store={store(reducers)}>
				<Post />
			</Provider>
		);	
	}
}

const styles ={
	 baseText: {
	    fontFamily: 'Open Sans',
	  }
};

export default App;