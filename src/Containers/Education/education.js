import React from 'react'
import './education.css'

const education = () => {
    return (
      <div id="educationDiv">
        <h1 className="educationHeading">Education</h1>
        <img
          className="collegeImg"
          style={{ height: "20rem", marginLeft: "2rem" }}
          src="https://i.postimg.cc/RCK0cwGF/school.png"
          alt="College"
        />
        <div style={{margin: '3rem 5rem 0 0', float:"right"}}>
          <h2 className="Btechheading">Bachelor of Technology</h2>
          <h3 className="aboutEdu">
            Pursuing B. Tech. from Maharaja Agrasen Institute of Technology,
            <br />
            Guru Gobind Singh Indraprastha University
            <br /> in Mechanical And Automation Engineering.
          </h3>
          <h3 className="aboutEdu" style={{ lineHeight: "0.4" }}>
            Passing Year - 2022
          </h3>
          <h3 className="aboutEdu" style={{ lineHeight: "0.4" }}>
            CGPA - 6.97
          </h3>
        </div>
      </div>
    );
}

export default education