import React, { Component } from 'react';
 
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';
import './Blog.css';

//import axios from 'axios';

import axiosInstance from '../../axios';

class Blog extends Component {

    state = {
        auth: false
    }
    
    render () {     
          
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                    exact 
                                    to='/posts/'
                                    activeClassName='my-active'
                                    activeStyle={{
                                         fontSize: '1.5em'
                                    }}
                                >Home</NavLink></li>
                            <li><NavLink to={{
                                    pathname: '/new-post', //Absolute path to domain
                                    //pathname: this.props.match.url + '/new-post', // relative path
                                    hash: '#IDElement',
                                    search:'?quick-submit=true'   
                                }}
                                activeStyle={{fontSize: '1.5em'}}
                            >NewPost</NavLink></li>

                        </ul>
                    </nav>
                </header>
                {/*<Route path='/' render={() => <h1>Home1</h1>} />
                <Route path='/' exact render={() => <h1>Home2</h1>} />
                <Route path='/new-post' render={() => <h1>Home3</h1>} />*/}

                
                <Switch> {/* Switch wybiera tylko pierwszy pasujący element i renderuje*/}
                    

                    {this.state.auth ? <Route path='/new-post' component={NewPost} /> : null}
                    <Route path='/posts' component={Posts} />
                    <Redirect from='/' to='/posts' /> {/* zamienia ścieszkę z from na to tylko w Switchu*/}

                    {/*<Route path='/' component={Posts} />*/}
                    {/*<Route path='/:postId' exact component={FullPost} />*/}
                </Switch>
                {/*<Route path='/posts/:postId' exact component={FullPost} />  altrnatywne rozwiązanie*/}
                
            </div>
        );
    }
}

export default Blog;