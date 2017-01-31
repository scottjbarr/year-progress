import React, { Component } from 'react'
import './App.css'

import Header from './Header'
import ProgressBar from './ProgressBar'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date()
    }
  }

  render() {
    return (
      <div className="App-wrapper">
        <Header/>

        <div className="App container">
          <p>How much has the year progressed?</p>

          <ProgressBar date={this.state.date} />

          <p>Each year we set goals for ourselves, confident that we can achieve them. We have a whole year ahead.</p>

          <p>Too soon, April arrives and the 1st quarter of the year is behind you. You tell yourself that you still have plenty of time to complete your goals. This is not the first lie we have told ourselves this year.</p>

          <p>When we think of time in weeks, months, quarters and years, we do not appreciate how short a year really is. These periods of time seem plentiful, and there are so many of them.</p>

          <p>If you were taking a one hour test, and after 15 minutes you had not started you would be concerned because you have wasted one-quarter of the time available to you. Similarly, when March ends, 25% of the year has passed. If you haven't already, it is time to start working on those goals!</p>

          <p>This project is an attempt to visualise the year in a different way, ultimately to beat procrastination.</p>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default App
