import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { renderAllPost } from './../actions';
import axios from 'axios';


class Post extends Component {

	constructor(props){
		super(props);
		this.state = {
			posts: []
		}
	}

	componentWillMount(){
		//axios.get('https://iamsiddy.com/api/managerapi/public/api/v1/posts').then(res => console.log(res));
		//this.props.renderAllPost;
		axios({
		  method:'get',
		  url:'http://iamsiddy.com/api/managerapi/public/api/v1/posts',
		  //responseType:'stream'
		})
		  .then(function(response) {
		  	console.log(response);
		});
	}

	render(){
		return (
			<View style={styles.postWrapper}>
				<Text>This is post</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	  postWrapper: {
	  	flex: 1,
	  	backgroundColor: '#e5e7e8',
	  	paddingTop: 30
	  }
});


function mapStateToProps(state){
	console.log(state);
	return { };
}


export default connect(mapStateToProps, {renderAllPost})(Post); 