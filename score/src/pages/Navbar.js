import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import { Link, Routes, Route} from 'react-router-dom';
import Dashboard from './dashboard';
import Score from './score';
import Popularplayer from './popularplayers';
import Contact from './contact';
import About from './about';

class Navbar extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Leaderboard Score</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/score">Score</Link></li>
              <li><Link to="/popularplayer">Popular Players</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route  path="/score" element={<Score/>} />
          <Route  path="/popularplayer" element={<Popularplayer/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route  path="/about" element={<About/>} />
        </Routes>
      </>
    );
  }
}

export default Navbar;




