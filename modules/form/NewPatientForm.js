import React from 'react'
import AboutYourChild from './AboutYourChild'
import AccountInformation from './AccountInformation'
import ChildDentalInformation from './ChildDentalInformation'
import ChildFamilyHistory from './ChildFamilyHistory'
import ChildMedicalHistory from './ChildMedicalHistory'
import InsuranceInformation from './InsuranceInformation'
import TermsAndConditions from './TermsAndConditions'

var fieldValues = {
  firstName: null,
  middleInitial: null,
  lastName: null,
  nickname: null,
  gender: null,
  birthDate: null,
  age: null,
  school: null,
  gradeLevel: null,
  homePhone: null,
  socialSecurity: null,
  address: null,
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
                  fieldValues={fieldValues}
                  previousStep={this.previousStep}
                  nextStep={this.nextStep}
                  saveValues={this.saveValues} />
      case 3:
        return <InsuranceInformation
                  fieldValues={fieldValues}
                  previousStep={this.previousStep}
                  nextStep={this.nextStep}
                  saveValues={this.saveValues} />
      case 4:
        return <AccountInformation
                  fieldValues={fieldValues}
                  previousStep={this.previousStep}
                  nextStep={this.nextStep}
                  saveValues={this.saveValues} />
      case 5:
        return <ChildDentalInformation
                  fieldValues={fieldValues}
                  previousStep={this.previousStep}
                  nextStep={this.nextStep}
                  saveValues={this.saveValues} />
      case 6:
        return <ChildMedicalHistory
                  fieldValues={fieldValues}
                  previousStep={this.previousStep}
                  nextStep={this.nextStep}
                  saveValues={this.saveValues} />
      case 7:
        return <TermsAndConditions
                  fieldValues={fieldValues}
                  previousStep={this.previousStep}
                  saveValues={this.saveValues} />
    }
  }
})
