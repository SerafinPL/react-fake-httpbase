import React, { Component } from 'react';
 
import { Route, Link } from 'react-router-dom'

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
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
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to={{
                              pathname: '/new-post',
                              hash: '#IDElement',
                              search:'?quick-submit=true'   
                            }}>NewPost</Link></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path='/' render={() => <h1>Home1</h1>} />
                <Route path='/' exact render={() => <h1>Home2</h1>} />
                <Route path='/new-post' render={() => <h1>Home3</h1>} />*/}
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' component={NewPost} />
            </div>
        );
    }
}

export default Blog;