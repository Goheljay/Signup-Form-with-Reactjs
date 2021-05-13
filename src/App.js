import './App.css';
import React from "react";
import logo from './assets/Group.svg';
import sideimage from './assets/image1.svg';
import groupimage1 from './assets/image2.svg';
import groupimage2 from './assets/image3.svg';

function App() {
  return (
    <>
      <header className="App-header">
      
        <a><img className="app-logo" src={logo} alt="logo" /></a>
        <p className="logo-text">Create School Account</p>
      </header> 

      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
          <h2 className="heading mt-5">Welcome to Globiliti!</h2>
          <p className="secondry-text">Create your school account</p>
            <form action=""className="form-group">

              <label className="label1">What’s your full name?</label>
              <input type="text" className="form-element"/>
              <br/>
              <label className="label1">Email</label>
              <input type="email" className="form-element"/>
              <br/>
              <label className="label1">Password</label>
              <input type="password" className="form-element"/>
              <p className="correction">Password must be 8 characters or longer.</p>
              <br/>
              <button className="btn-submit">Create account</button>
            </form>
          </div>
          <div className="col-md-6" >
            <img src={sideimage} alt="" />
            <div className="group-image">
              <img src={groupimage2} className="img1" alt="image 1" />
              <img src={groupimage1} className="img2" alt="image 2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

        /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */