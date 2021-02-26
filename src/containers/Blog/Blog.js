import React, { Component } from 'react';
 
import { Route } from 'react-router-dom'

import Posts from './Posts/Posts';
import './Blog.css';

//import axios from 'axios';

import axiosInstance from '../../axios';

class Blog extends Component {

    
    render () {     
          
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/new-post'>NewPost</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path='/' render={() => <h1>Home1</h1>} />
                <Route path='/' exact render={() => <h1>Home2</h1>} />
                <Route path='/new-post' render={() => <h1>Home3</h1>} />
            </div>
        );
    }
}

export default Blog;