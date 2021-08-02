import React from 'react'
import Introduction from './Containers/Introduction/Introduction'
import Skills from './Containers/WhatdoIknow/skills'
import Education from './Containers//Education/education'
import Projects from './Containers/Projects/Projects'

const App = () => {
  return (
    <React.Fragment>
      <Introduction/>
      <Skills/>
      <Education/>
    </React.Fragment>
  );
}

export default App;
