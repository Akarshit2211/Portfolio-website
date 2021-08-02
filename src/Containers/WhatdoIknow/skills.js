import React from 'react';
import './skills.css'

const skills = () => {
    return (
        <div id = "skillsDiv">
            <h1 className = "skillsHeading">What I Do</h1>
            <img className = "backgroundImage" src = "https://www.htmlden.com/wp-content/themes/ks/img/web-developer-master-tn.svg" alt = "web-dev-svg" />
            <h2 className = "webDevHeading">Web Development</h2>
            <ul className = "webDList">
                <li classname = "skillPoint" >
                    <p>Building responsive websites using <span style = {{color: 'red'}}>HTML</span>, <span style = {{color: '#00bfff'}}>CSS</span>, <span style ={{color: '#f4c430'}}>JavaScript</span> and <span style = {{color: '#7DF9FF'}} >React</span></p>
                </li>
                <li classname = "skillPoint" >
                    <p>Building dynamic websites using <span style = {{color: '#8db600'}} >Node.js</span>, Express.js, Sql, <span style = {{color: '#4cbb17'}} >MongoDB</span> and RestAPI.</p>
                </li>
            </ul>
            <div otherSkillDiv >
                <h2 className = "otherSkills" >Other Stacks and Languages</h2>
                <div className = "cDiv" >
                    <img src="https://img.icons8.com/color/96/000000/c-plus-plus-logo.png"/>
                    <h3 className = "cLang" >C++</h3>
                </div>
                <div className = "pyDiv" >
                    <img src="https://img.icons8.com/color/96/000000/python--v2.png"/>
                    <h3 className = "pyLang" >Python</h3>
                </div>
                <div className = "mlDiv" >
                    <img className = "mlImage" src="https://img.icons8.com/bubbles/100/000000/learning.png"/>
                    <h3 className = "ml" >Machine Learning</h3>
                </div>
            </div>
        </div>
    )
}

export default skills;