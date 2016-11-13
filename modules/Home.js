import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div id="home" className="main">
        <div className="container">
          <div className="row">
            <div className="title">
              <img src={"../images/aloe-icon.png"} className="img-responsive"/>
              <div className="aloe">Aloe</div>
            </div>
            <div className="border"></div>
            <div className="message">
              <p>Welcome to Aloe.</p>
              <p>Let's get Started!</p>
            </div>
            <button type="button" className="btn">Log In</button>
            <div className="new-patient-link">
              <NavLink to="/doctor">New Patient? Start here.</NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
