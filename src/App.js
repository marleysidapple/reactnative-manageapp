import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
				<View style={styles.mainWrapper}>
					<Text>This is app</Text>
				</View>
			</Provider>
		);	
	}
}

const styles = StyleSheet.create({
	 baseText: {
	    fontFamily: 'Open Sans',
	  },

	  mainWrapper: {
	  	flex: 1,
	  	backgroundColor: '#e5e7e8'
	  }
});

export default App;