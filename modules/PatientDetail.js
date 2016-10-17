import React from 'react'

export default React.createClass({
  getInitialState: function(){
    return {
      patient: {}
    };
  },

  loadPatientInfo: function(){
    $.ajax({
      url: 'http://localhost:8000/patients/' + this.props.params.patientId,
      dataType: 'json',
      success: function(data) {
        this.setState({patient: data});
        $('#patient').fadeTo('fast', 1);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('#GET Error', status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function(){
    this.loadPatientInfo();
  },

  render: function(){
    var patient = this.state.patient;
    return (
      <div id="patient" className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Patient Record</h1>
            <table>
              <tbody>
                <tr>
                  <th>First Name</th>
                  <td>{patient.firstName}</td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>{patient.lastName}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
})
