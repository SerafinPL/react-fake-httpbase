import React, { Component } from 'react';
 
import { Route, NavLink } from 'react-router-dom'

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
                            <li><NavLink 
                                    exact 
                                    to='/'
                                    activeClassName='my-active'
                                    activeStyle={{
                                        animation: 'mymove 5s', 
                                        keyframes: 'mymove { to {fontSize: 1.5em;}}'
                                        
                                    }}
                                >Home</NavLink></li>
                            <li><NavLink to={{
                              pathname: '/new-post', //Absolute path to domain
                              //pathname: this.props.match.url + '/new-post', // relative path
                              hash: '#IDElement',
                              search:'?quick-submit=true'   
                            }}>NewPost</NavLink></li>
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