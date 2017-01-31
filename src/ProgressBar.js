import React, { Component } from 'react'

import './ProgressBar.css'

class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.date = props.date
  }

  daysInYear = () => {
    var start = new Date(this.date.getFullYear(), 0, 0);
    var diff = this.date - start;
    var oneDay = 1000 * 60 * 60 * 24;

    return Math.floor(diff / oneDay);
  }

  getPercent = () => {
    return Math.floor(this.daysInYear()/365 * 100)
  }

  render() {
    const yearPercent = this.getPercent()
    const pct = yearPercent + "%"

    return (
      <div className="ProgressBar progress">
        <span className="progress-value">{pct} Complete</span>
        <div className="progress-bar progress-bar-success"
             role="progressbar"
             aria-valuenow={yearPercent}
             aria-valuemin="0"
             aria-valuemax="100"
             style={{"width":pct}}>
        </div>
      </div>
    );
  }
}

ProgressBar.defaultProps = {
    date: new Date(),
}

export default ProgressBar
