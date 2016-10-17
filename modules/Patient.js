import React from 'react'
import NavLink from './NavLink'

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
        <NavLink to={`/patients/${patient.patientId}`} className="patient">
          <h3>{patient.patientFirstName}</h3>
          <h4>{patient.patientLastName}</h4>
        </NavLink>
      </div>
    )
  }
})
