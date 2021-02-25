import React, { Component } from 'react';

import './NewPost.css';

import axios from 'axios';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Kuba'
    }

    postDataHandler = () => {
        const sendPost = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }

        axios.post('/posts', sendPost)
        .then(response => {
            console.log(response);//fake 
        });
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Dodaj Post</h1>
                <label>Tytuł</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Zawartość</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Autor</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Kuba">Kuba</option>
                    <option value="Anita">Anita</option>
                </select>
                <button onClick={this.postDataHandler}>Dodaj Post</button>
            </div>
        );
    }
}

export default NewPost;