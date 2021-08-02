import React from 'react'
import './Introduction.css'
import Navbar from '../../Components/Navbar/Navbar'

const introduction = () => {



    return (
      <React.Fragment>
        <Navbar />
        <div>
          <video
            id="background_video"
            autoPlay
            loop
            muted
            poster="https://i.postimg.cc/wj4vBNFH/Screenshot-from-2021-08-02-17-49-11.png"
          >
            <source
              src="https://static.videezy.com/system/resources/previews/000/008/213/original/Tech_Tiles.mp4"
              type="video/mp4"
            />
          </video>
          <div className="introDiv">
            <h1>
              <em>Hello</em>
            </h1>
            <h2>I am Akarshit Joshi</h2>
            <h4>
              I am currently an Engineering student,
              <br />
              <span id="span1">aspiring to become a developer.</span>
            </h4>
          </div>
        </div>

        <div className="socialLinks">
          <a href="https://github.com/Akarshit2211">
            <img
              className="socialLogos"
              src="https://img.icons8.com/nolan/64/github.png"
              alt=""
              onClick={() => {}}
            />
          </a>
          <a href="https://www.linkedin.com/in/akarshit-joshi-4738961a6/">
            <img
              className="socialLogos"
              alt=""
              src="https://img.icons8.com/nolan/64/linkedin.png"
            />
          </a>
          <a href="mailto:joakarshit@gmail.com">
            <img
              alt=""
              className="socialLogos"
              src="https://img.icons8.com/nolan/64/email.png"
            />
          </a>
        </div>
      </React.Fragment>
    );
}

export default introduction;