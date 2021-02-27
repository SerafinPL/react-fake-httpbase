import React, { Component } from 'react';

import './NewPost.css';

import axios from 'axios';

import { Redirect } from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Kuba',
        submitted: false
    }

    componentDidMount(){

        const query = new URLSearchParams(this.props.location.search);
        console.log(query.entries());
        for (let param of query.entries()) {
            console.log(param); // yields ['start', '5']
        }
        //console.log(this.props);
    }

    postDataHandler = () => {
        const sendPost = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }

        axios.post('/posts', sendPost)
        .then(response => {
            //this.props.history.push('/posts'); // dołożenie do stosu
            this.props.history.replace('/posts'); // zamiana bez możliwości powrotu
            //this.setState({submitted : true}); 
            //console.log(response);//fake 
        });
    }

    

    render () {

        let redirect = null;

        if (this.state.submitted) {
           redirect = <Redirect to='/posts'/>;
        }

        return (
            <div className="NewPost">
                 {redirect}
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