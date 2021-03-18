import React, { Component } from 'react';

import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }
    
    componentDidMount() {
        this.loadedData();
    }

    componentDidUpdate() {
        this.loadedData();
    }

    loadedData() {
        console.log(this.props);
        if (this.props.match.params.postId){
            if (!this.state.loadedPost || ( this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.postId )){
                axios.get('/posts/' + this.props.match.params.postId)
                    .then(response => {
                    //console.log(response);
                    this.setState({loadedPost: response.data});
                    })
                    .catch(error =>{
                        this.setState({loadedPost: {title: 'błąd odczytu'}});
                    });
            }
            
        }
    }

    deletePostHandler = () =>{
        axios.delete('/posts/' + this.props.match.params.postId)
        .then(response => {
            console.log(response);//fake delete
        });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Nie odnaleziono takiego fake posta!</p>;
        
        if (this.props.match.params.postId){
            post = <p style={{textAlign: 'center'}}>Ładowanie...</p>;
        }

        if (this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Usuń Post</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;