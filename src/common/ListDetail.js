import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ListDetail extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style={styles.detailwrapper}>
				<Text style={styles.email}>{this.props.allDetail.email}</Text>
				<Icon style={styles.emailOne} name="chevron-right" size={10} color="#898585" />
			</View>
		);
	}
}


const styles = {
	detailwrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		height: 40,
		borderBottomWidth: 1,
		borderBottomColor: '#c9c9c9',  
		paddingLeft: 10,
		position: 'relative',
		alignItems: 'center'
	},

	email:{
		flex: 1,
	},


	emailOne:{
		width: 40 //this one is necessary
	}

};


export default ListDetail;


