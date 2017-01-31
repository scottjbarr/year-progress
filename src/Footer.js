import React from 'react'

import './Footer.css'

const Footer = (props) => {
  const year = new Date().getYear() + 1900

  return (
    <div className="Footer">
      <div className="container">
        <p>&copy; Scott Barr {year}.</p>
      </div>
    </div>
  )
}

export default Footer
