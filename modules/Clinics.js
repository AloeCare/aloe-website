import React from 'react'
import Clinic from './Clinic'

var Clinics = React.createClass({
  getInitialState: function(){
    return {
      data: []
    };
  },

  loadClinics: function() {
    $.ajax({
      url: 'http://localhost:8000/clinics',
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
        $('#clinics').fadeTo('fast', 1);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('#GET Error', status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadClinics();
  },

  render: function() {
    return (
      <div id="clinics" className="container">
        <div className="row">
          {
            this.state.data.map(function(clinic) {
              return <Clinic key={clinic.id} clinic={clinic}/>
            })
          }
        </div>
      </div>
    )
  }
})

module.exports = Clinics;
