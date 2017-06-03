import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ListDetail extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style={styles.detailwrapper}>
				<Text>{this.props.allDetail.email}</Text>
			</View>
		);
	}
}


const styles = {
	detailwrapper: {
		height: 40,
		borderBottomWidth: 1,
		borderBottomColor: '#dbd6d6',  
		paddingLeft: 10,
		justifyContent: 'center',
		alignItems: 'flex-start',
	}
};


export default ListDetail;


