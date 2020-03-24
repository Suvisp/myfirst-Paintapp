// App.js
import React, { Component, Fragment } from 'react';
import './App.css';
import Canvas from './canvas';
import ArvattavaSana from './component/ArvattavaSana';
class App extends Component {
  render() {
    return (
      <Fragment>
        <ArvattavaSana />
        <h3 style={{ textAlign: 'center' }}>Dos Paint</h3>
        <div className="main">
          <div className="color-guide">
            <h5>Color Guide</h5>
            <div className="user user">User</div>
            <div className="user guest">Guest</div>
          </div>
          <Canvas />
        </div>
      </Fragment>
    );
  }
}
export default App;