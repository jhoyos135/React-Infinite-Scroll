import React, { Component } from 'react';
import './App.css';
import Images from './components/Images';
import logo from './Logo.png';

class App extends Component {
  render() {
    return (

      <div id="root">
        <div className="hero is-fullheight is-bold is-info">
          <div className="hero-body">
            <div className="container-fluid">
              <div className="display-2 text-center text-white">
                <a className="logo" href="http://juliandhoyos.com" target="_blank">
                  <img src={logo} alt="logo" />
                </a>
                  Unsplash Infine Scroll
              </div>

              <hr />

              <Images />

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
