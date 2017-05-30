import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
				<View>
					<Text>This is app</Text>
				</View>
			</Provider>
		);	
	}
}

export default App;