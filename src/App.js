import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (	//basename parametr źródła na serwerze
    	<BrowserRouter basename='/'>  
	      <div className="App">
	        <Blog />
	      </div>
	    </BrowserRouter>
    );
  }
}

export default App;
