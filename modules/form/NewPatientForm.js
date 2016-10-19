import React from 'react'
import AboutYourChild from './AboutYourChild'
import ChildFamilyHistory from './ChildFamilyHistory'

var fieldValues = {
  firstName: null,
  lastName: null,
  clinicId: null
}

export default React.createClass({
  getInitialState: function() {
    fieldValues.clinicId = this.props.params.clinicId;
    return {
      step: 1
    }
  },

  saveValues: function(fields) {
    return function() {
      fieldValues = Object.assign({}, fieldValues, fields);
    }()
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  render: function(){
    switch (this.state.step) {
      case 1:
        return <AboutYourChild
                  fieldValues={fieldValues}
                  nextStep={this.nextStep}
                  saveValues={this.saveValues} />
      case 2:
        return <ChildFamilyHistory
                  fieldValues={fieldValues} />
    }
  }
})
