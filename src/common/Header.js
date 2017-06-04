import React, { Component } from 'react';
import { Text, View} from 'react-native';

class Header extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style={styles.headerWrapper}>
				<Text>{this.props.headerTitle}</Text>
			</View>
		);
	}

}

const styles = {
	headerWrapper:{
		height: 60,
		backgroundColor: '#dbd6d6',
		justifyContent: 'center',
		alignItems: 'center'
	}
}

export default Header;