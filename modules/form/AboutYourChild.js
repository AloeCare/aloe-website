import React from 'react'
import TextInput from './inputs/TextInput'
import NameInput from './inputs/NameInput'
import GenderSelect from './inputs/GenderSelect'
import BirthdateSelect from './inputs/BirthdateSelect'

export default React.createClass({
  getInitialState: function() {
    return {
      data: {}
    };
  },

  saveAndContinue: function(e){
    e.preventDefault();
    this.props.saveValues(this.state.data);
    this.props.nextStep();
  },

  render: function(){
    return (
      <div className="container main form">

      <div className="row">
        <label className="col-md-2">Patient's Name</label>
        <div className="col-md-10">
          <NameInput 
              firstName={this.props.fieldValues.firstName}
              middleInitial={this.props.fieldValues.middleInitial}
              lastName={this.props.fieldValues.lastName}
              onFirstNameChange={(firstName) => this.state.data.firstName = firstName}
              onMiddleInitialChange={(middleInitial) => this.state.data.middleInitial = middleInitial}
              onLastNameChange={(lastName) => this.state.data.lastName = lastName} />
        </div>
      </div>

      <div className="row">
        <label className="col-md-2">Nickname</label>
        <div className="col-md-10">
          <TextInput defaultValue={this.props.fieldValues.nickname}
              placeholder="Nickname"
              onChange={(nickname) => this.state.data.nickname = nickname} />
        </div>
      </div>

      <div className="row">
        <label className="col-md-2">Gender</label>
        <div className="col-md-10">
          <GenderSelect
              defaultValue={this.props.fieldValues.gender}
              onChange={(gender) => this.state.data.gender = gender} />
        </div>
      </div>

      <div className="row">
        <label className="col-md-2">Birthdate</label>
        <div className="col-md-10">
          <BirthdateSelect
              label="Birthdate"
              defaultMonth={this.props.fieldValues.birthMonth}
              defaultDay={this.props.fieldValues.birthDay}
              defaultYear={this.props.fieldValues.birthYear}
              onMonthChange={(birthMonth) => this.state.data.birthMonth = birthMonth}
              onDayChange={(birthDay) => this.state.data.birthDay = birthDay}
              onYearChange={(birthYear) => this.state.data.birthYear = birthYear} />
        </div>
      </div>

      <div className="pull-right">
        <button onClick={this.saveAndContinue} type="button" className="btn btn-success">Save and Continue</button>
      </div>

      </div>
    )
  }
})
