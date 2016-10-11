import React from 'react'

export default React.createClass({
  getInitialState: function(){
    return {
      patient: this.props.patient
    };
  },

  render: function(){
    var patient = this.state.patient;
    return (
      <div className="col-xs-3">
        <div className="patient">
          <i className="fa fa-trash-o" aria-hidden="true"></i>
          <h3>{patient.firstName}</h3>
          <h4>{patient.lastName}</h4>
        </div>
      </div>
    )
  }
})
