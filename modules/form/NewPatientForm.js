import React from 'react'
import AccountAndPayment from './AccountAndPayment'
import DentalInfo from './DentalInfo'
import Insurance from './Insurance'
import MedicalHistory from './MedicalHistory'
import PatientInfo from './PatientInfo'
import SummaryForm from './SummaryForm'
import TermsAndConditions from './TermsAndConditions'
import VisitAndReferral from './VisitAndReferral'

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
        return <SummaryForm
                  nextStep={this.nextStep} />
      case 2:
        return <PatientInfo
                  fieldValues={fieldValues}
                  nextStep={this.nextStep}
                  saveValues={this.saveValues} />
      case 3:
        return <Insurance
                  fieldValues={fieldValues}
                  previousStep={this.previousStep}
                  nextStep={this.nextStep}
                  saveValues={this.saveValues} />
      case 4:
        return <AccountAndPayment
                  fieldValues={fieldValues}
                  previousStep={this.previousStep}
                  nextStep={this.nextStep}
                  saveValues={this.saveValues} />
      case 5:
        return <DentalInfo
                  fieldValues={fieldValues}
                  previousStep={this.previousStep}
                  nextStep={this.nextStep}
                  saveValues={this.saveValues} />
      case 6:
        return <MedicalHistory
                  fieldValues={fieldValues}
                  previousStep={this.previousStep}
                  nextStep={this.nextStep}
                  saveValues={this.saveValues} />
      case 7:
        return <VisitAndReferral
                  fieldValues={fieldValues}
                  previousStep={this.previousStep}
                  nextStep={this.nextStep}
                  saveValues={this.saveValues} />
      case 8:
        return <TermsAndConditions
                  fieldValues={fieldValues}
                  previousStep={this.previousStep}
                  saveValues={this.saveValues} />
    }
  }
})
