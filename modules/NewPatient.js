import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render: function(){
    return (
      <div className="col-xs-3">
        <NavLink to={`/clinics/${this.props.clinicId}/new_patient`} className="patient">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </NavLink>
      </div>
    )
  }
})
