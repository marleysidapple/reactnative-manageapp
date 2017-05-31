import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { showAllPost } from './../actions/index';

class Post extends Component {

	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.showAllPost();
	}

	render(){
		return(
			<View style={styles.postWrapper}>
				<Text>Hello this is post</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	  postWrapper: {
	  	flex: 1,
	  	backgroundColor: '#e5e7e8',
	  	justifyContent: 'center',
	  	alignItems: 'center',
	  	paddingTop: 30
	  }
});


function mapStateToProps(state){
	console.log(state);
	return {
		pos : state.posts
	};
}


export default connect(mapStateToProps, {showAllPost})(Post);