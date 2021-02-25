import React, {Component} from 'react';

import axiosInstance from '../../../axios';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component{


	state = {
        posts: [],
        
    }


    componentDidMount(){
    axiosInstance.get('/posts')
    .then(response => {
        const posts = response.data.slice(0, 5);
        const updatedPosts = posts.map(post => {
            return {
                ...post,
                author: 'Kuba'
            }
        });
        this.setState({
            posts: updatedPosts
        })
        //console.log(response);
    })
    .catch(error => {
        // handle error
        console.log(error);
        //this.setState({error: true})
    });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

	render(){

		let posts = <p style={{textAlign : 'center'}}>Coś jest nie tak pojawił się ERROR</p>
        if (!this.state.error){
        posts = this.state.posts.map(post => {

                return <Post 
                    key={post.id} 
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
            }
            );
        } 


		return(
				<section className="Posts">
                    {posts}
                </section>
			);
	}
}

export default Posts;				

				