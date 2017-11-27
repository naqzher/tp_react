import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
//rutas
import Home from  './paginas/Home';
import Post from './paginas/Post';
import Photos from './paginas/Photos';
import Albums from './paginas/Albums';

import {
  //BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component{
  render(){
    return(      
      <Router>
        <div>
          <header><center><h1>@REACT</h1></center></header>
          <nav>
            <div className="container">
              <ul className="nav nav-tabs">
                <li role="presentation"><Link to='/'>Home</Link></li>
                <li role="presentation"><Link to='/Post'>Posts</Link></li>
                <li role="presentation"><Link to='/Albums'>Albums</Link></li>
              </ul>
            </div>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/Post' component={Post} />
          <Route path='/Albums' component={Albums} />
          <Route path='/Photos/:id' component={Photos} />
          <footer><center>© Copyright</center></footer>
        </div>          
      </Router>
    )
  }
}

export default App;
