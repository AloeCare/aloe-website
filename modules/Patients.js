import React from 'react'
import Patient from './Patient'

export default React.createClass({
  getInitialState: function(){
    return {
      data: []
    };
  },

  loadPatients: function(){
    $.ajax({
      url: 'http://localhost:8000/clinics/' + this.props.params.clinicId,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
        $('#patients').fadeTo('fast', 1);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('#GET Error', status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function(){
    this.loadPatients();
  },

  render: function(){
    return (
      <div id="patients" className="container">
        <div className="row">
          {
            this.state.data.map(function(patient) {
              return <Patient key={patient.id} patient={patient}/>
            })
          }
        </div>
      </div>
    )
  }
})
