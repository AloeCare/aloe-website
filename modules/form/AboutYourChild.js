import React from 'react'

export default React.createClass({
  saveAndContinue: function(e){
    e.preventDefault();

    var data = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value
    };

    this.props.saveValues(data);
    this.props.nextStep();
  },

  render: function(){
    return (
      <div className="container main form">
        <div className="row">
          <div className="col-lg-12">
            <h1>About Your Child</h1>

            <input type="text" ref="firstName" defaultValue={this.props.fieldValues.firstName} placeholder="Enter First Name"/>

            <br/>

            <input type="text" ref="lastName" defaultValue={this.props.fieldValues.lastName} placeholder="Enter Last Name"/>

            <br/>

            <button onClick={this.saveAndContinue} type="button" className="btn btn-success">Save and Continue</button>
          </div>
        </div>
      </div>
    )
  }
})
