import React, { Component } from 'react';
import './Home.css'
import portrait from '../../images/portrait.png';


class Home extends Component {
  render() {
    return (
      <>
        <div className="top-home"> 
          <h1 className="name-header">
            Hello, I'm Jose Lopez
          </h1>
          <h1 className="job-header">
            Software Developer
          </h1>
        </div>

        <div className="bottom-home">
          <p className="summary">
            <h1>Bio:</h1><br></br>
            I am a software engineer/developer that just graduated from Turing School of Software & Design and my goal is to create my own video game one day. Until then, I strive to grow and continue to expand my knowledge to become the best developer I can be. I am very flexible when it comes to new environments and as well as picking new technologies quickly.
         </p>

         <img src={portrait} alt="portrait" className="portrait" />
         
         <p className="personal-info">
           <h1>Personal Info:</h1><br></br>
           <b>Name:</b> Jose Lopez<br></br>
           <br></br>
           <b>Email:</b> JoseLopez11394@gmail.com<br></br>
           <br></br>
           <b>GitHub:</b> <a target="_blank" href="https://github.com/JoseLopez235"> My GitHub</a><br></br>
           <br></br>
           <b>LinkedIn:</b> 
          <a target="_blank" href="https://www.linkedin.com/in/jose-lopez-0551a01a1/"> My LinkedIn </a>
         </p>
        </div>
      </>
    )
  }
}

export default Home