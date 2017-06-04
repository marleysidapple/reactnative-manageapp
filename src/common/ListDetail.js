import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ListDetail extends Component {

	constructor(props){
		super(props);
	}


	onPressingListItem(id){
		console.log(id);
	}


	render(){
		return(
			<TouchableOpacity onPress={this.onPressingListItem.bind(this, this.props.allDetail.id)}>
			<View style={styles.detailwrapper}>
				<Text style={styles.email}>{this.props.allDetail.email}</Text>
				<Icon style={styles.emailOne} name="angle-right" size={15} color="#898585" />
			</View>
			</TouchableOpacity>
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
		color: '#494646'
	},


	emailOne:{
		width: 40, //this one is necessary
		textAlign: 'center'
	}

};


export default ListDetail;


