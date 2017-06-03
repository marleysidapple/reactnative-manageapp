import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ListDetail extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<View>
				<Text>{this.props.allDetail.email}</Text>
			</View>
		);
	}
}


export default ListDetail;


