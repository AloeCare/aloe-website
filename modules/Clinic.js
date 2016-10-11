import React from 'react'
import NavLink from './NavLink'
import Patients from './Patients'

export default React.createClass({
  getInitialState: function(){
    return {
      clinic: this.props.clinic
    };
  },

  render: function() {
    var clinic = this.state.clinic
    return (
      <div className="col-xs-3">
        <NavLink to={`/clinics/${clinic.id}`} className="clinic">
          <i className="fa fa-trash-o" aria-hidden="true"></i>
          <h3>{clinic.name}</h3>
          <h4>{clinic.description}</h4>
        </NavLink>
      </div>
    )
  }
})
