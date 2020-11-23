import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contents from './Contents'

function App() {
  return (
 <Router>
    <div className="App">
     <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contents">Contents</Link>
        </li>
      </ul>
     <Route path="/" exact={true} component={Home} />
     <Route path="/about" component={About} />
     <Route path="/contents" component={Contents} />
    </div></Router>
  );
}

export default App;
