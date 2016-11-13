import React from 'react'
import { browserHistory } from 'react-router';

export default React.createClass({
  addNewPatient: function(){
    $.post({
      url: 'http://localhost:8000/patients/',
      data: this.props.fieldValues,
      dataType: 'json',
      success: function(data) {
        console.log(data);
        browserHistory.push('/patients/' + data.patient.id);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('#GET Error', status, err.toString());
      }.bind(this)
    });
  },

  render: function(){
    console.log(this.props.fieldValues);
    return (
      <div className="container main form">
        <div className="row">
          <div className="col-lg-12">
            <h1>Confirm Patient Info</h1>

            <table>
              <tbody>
                <tr>
                  <th>First Name</th>
                  <td>{this.props.fieldValues.firstName}</td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>{this.props.fieldValues.lastName}</td>
                </tr>
              </tbody>
            </table>

            <button onClick={this.addNewPatient} type="button" className="btn btn-success">Add New Patient</button>
          </div>
        </div>
      </div>
    )
  }
})
