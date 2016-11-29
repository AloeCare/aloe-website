import React from 'react'

export default React.createClass({
  render: function(){
    return (
      <div className="container main form" id="summary-form-preview">
        <div className="row">
          <div className="col-lg-12">
            <div className="title">Summary Form Preview</div>
            <div className="border"></div>
            <ol>
              <li>Patient Information</li>
              <li>Insurance Details</li>
              <li>Account / Payment</li>
              <li>Dental Information</li>
              <li>Medical History</li>
              <li>Visit Reason & Referral</li>
              <li>Terms & Conditions</li>
            </ol>
            <button onClick={this.props.nextStep} type="button" className="btn btn-warning">Continue</button>
          </div>
        </div>
      </div>
    )
  }
})
