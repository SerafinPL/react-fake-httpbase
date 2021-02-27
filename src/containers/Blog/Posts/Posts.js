import React, {Component} from 'react';

import axiosInstance from '../../../axios';

import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link, Route } from 'react-router-dom'
import FullPost from '../FullPost/FullPost';


class Posts extends Component{


	state = {
        posts: [],
        error: null,
        load:false
        
    }


    componentDidMount(){
        console.log(this.props);

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
            posts: updatedPosts,
            load: true
        })
        //console.log(response);
    })
    .catch(error => {
        // handle error
        console.log(error);
        this.setState({error: true})
    });
    }

    postSelectedHandler = (id) => {
        //this.setState({selectedPostId: id});
        //this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push('/posts/' + id);

    }

	render(){

		let posts = <p style={{textAlign : 'center'}}>Ładowanie postów</p>

        if (this.state.error) {posts = <p style={{textAlign : 'center'}}>Coś jest nie tak pojawił się ERROR</p>};

        if (!this.state.error && this.state.load){
        posts = this.state.posts.map(post => {

                return( //<Link to={'/' +post.id} key={post.id}>
                            <Post 
                                key={post.id}
                                title={post.title}
                                author={post.author}
                                clicked={() => this.postSelectedHandler(post.id)}
                            />
                        //</Link>
                        );
            }
            );
        }; 


		return(
            <div>
                
				<section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:postId'} exact component={FullPost} />
            </div>
			);
	}
}

export default Posts;				

				