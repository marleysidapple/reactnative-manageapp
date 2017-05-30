import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Post from './components/Post';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

class App extends Component {

	constructor(props){
		super(props);
	}


	render(){
		return (
			<Provider store={createStore(reducers)}>
				<Post />
			</Provider>
		);	
	}
}

const styles = StyleSheet.create({
	 baseText: {
	    fontFamily: 'Open Sans',
	  }
});

export default App;