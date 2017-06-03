import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { showAllPost } from './../actions/index';
import ListDetail  from './../common/ListDetail';

class Post extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.showAllPost();
	}

	showAllPosts(){
		return this.props.post.map((ps) => 
			<ListDetail allDetail={ps}/>
			// <Text>{ps.email}</Text>
			//return <ListDetail detail={ps} />
			//return <Text key={ps.id}>{ps.email}</Text>;
		);
	}

	render(){
		return(
			<View style={styles.postWrapper}>
				{this.showAllPosts()}
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
	  	paddingTop: 35
	  }
});


function mapStateToProps(state){
	console.log(state.posts.all);
	return {
		post : state.posts.all
	};
}


export default connect(mapStateToProps, {showAllPost})(Post);