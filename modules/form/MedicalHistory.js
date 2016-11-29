import React from 'react'

export default React.createClass({
  saveAndContinue: function(e){
    e.preventDefault();

    var data = {};

    this.props.saveValues(data);
    this.props.nextStep();
  },

  render: function(){
    return (
      <div className="container main form">
        <div className="row">
          <div className="col-lg-12">
            <h1>Medical History</h1>
            <button onClick={this.saveAndContinue} type="button" className="btn btn-success">Continue</button>
            <button onClick={this.props.previousStep} type="button" className="btn btn-success">Back</button>
          </div>
        </div>
      </div>
    )
  }
})
