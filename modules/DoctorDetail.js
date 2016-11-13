import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div id="doctor" className="main">
        <div className="container">
          <div className="row">
            <div className="title">
              Thank you for vising Growing Smiles!
            </div>
            <div className="message">
              Learn more about your doctor you will be seeing today
            </div>
            <div className="border"></div>
            <div className="info-container">
              <img src={"../images/meredith.jpg"} className="profile-image img-responsive img-circle" />
              <div className="info">
                <div className="name">Meredith Grey DDS</div>
                <p>Dr. Nasser Antonious is a graduate of the Alexandria Dental School, Alexandria, Egypt. He received his dental degree in 1980 and obtained his California Dental License in 1989. Dr. Antonious has dedicated his professional career to providing his patients with the best that dentistry has to offer.</p>
                <p>Prior to establishing his private practice in Sunnyvale, Dr. Antonious held the position of Dental Director with a large dental group that maintains multiple locations throughout Southern California.</p>
              </div>
              <NavLink className="btn" to="/clinics/1/new_patient">Continue</NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
