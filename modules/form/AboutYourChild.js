import React from 'react'

import FormRow from './FormRow.js'
import TextInput from './inputs/TextInput'
import SmallTextInput from './inputs/SmallTextInput'
import NameInput from './inputs/NameInput'
import GenderSelect from './inputs/GenderSelect'
import BirthDateSelect from './inputs/BirthDateSelect'
import AgeInput from './inputs/AgeInput'
import PhoneNumberInput from './inputs/PhoneNumberInput'
import SocialSecurityInput from './inputs/SocialSecurityInput'
import AddressInput from './inputs/AddressInput'

export default React.createClass({
  getInitialState: function() {
    console.log(this.props);
    return {
      data: {}
    }
  },

  checkForKey: function(key) {
    var data = this.state.data;
    if (!data[key]) {
      data[key] = {};
    }
  },

  setBirthDateInfo: function(key, value) {
    this.checkForKey('birthDate');
    this.state.data.birthDate[key] = value;
  },

  setHomePhoneInfo: function(key, value) {
    this.checkForKey('homePhone');
    this.state.data.homePhone[key] = value;
  },

  setSocialSecurityInfo: function(key, value) {
    this.checkForKey('socialSecurity');
    this.state.data.socialSecurity[key] = value;
  },

  setAddressInfo: function(key, value) {
    this.checkForKey('address');
    this.state.data.address[key] = value;
  },

  saveAndContinue: function(e){
    e.preventDefault();
    this.props.saveValues(this.state.data);
    this.props.nextStep();
  },

  render: function(){
    return (
      <div className="container main form">

      <FormRow label="Patient's Name">
        <NameInput 
            firstName={this.props.fieldValues.firstName}
            middleInitial={this.props.fieldValues.middleInitial}
            lastName={this.props.fieldValues.lastName}
            onFirstNameChange={(firstName) => this.state.data.firstName = firstName}
            onMiddleInitialChange={(middleInitial) => this.state.data.middleInitial = middleInitial}
            onLastNameChange={(lastName) => this.state.data.lastName = lastName} />
      </FormRow>

      <FormRow label="Nickname">
        <TextInput
            defaultValue={this.props.fieldValues.nickname}
            placeholder="Nickname"
            onChange={(nickname) => this.state.data.nickname = nickname} />
      </FormRow>

      <FormRow label="Gender">
        <GenderSelect
            defaultValue={this.props.fieldValues.gender}
            onChange={(gender) => this.state.data.gender = gender} />
      </FormRow>

      <FormRow label="Birthdate">
        <BirthdateSelect
            defaultBirthDate={this.props.fieldValues.birthDate}
            onMonthChange={(month) => this.setBirthDateInfo('month', month)}
            onDayChange={(day) => this.setBirthDateInfo('day', day)}
            onYearChange={(year) => this.setBirthDateInfo('year', year)} />
      </FormRow>

      <FormRow label="Age">
        <AgeInput 
            defaultValue={this.props.fieldValues.age}
            onAgeChange={(age) => this.state.data.age = age} />
      </FormRow>

      <FormRow label="School">
        <TextInput
            defaultValue={this.props.fieldValues.school}
            placeholder="School"
            onChange={(school) => this.state.data.school = school} />
      </FormRow>

      <FormRow label="Grade Level">
        <SmallTextInput
            defaultValue={this.props.fieldValues.gradeLevel}
            placeholder="Grade Level"
            onChange={(gradeLevel) => this.state.data.gradeLevel = gradeLevel} />
      </FormRow>

      <FormRow label="Home Phone">
        <PhoneNumberInput
            defaultPhoneNumber={this.props.fieldValues.homePhone}
            onAreaCodeChange={(areaCode) => this.setHomePhoneInfo('areaCode', areaCode)}
            onExchangeChange={(exchange) => this.setHomePhoneInfo('exchange', exchange)}
            onLineChange={(line) => this.setHomePhoneInfo('line', line)} />
      </FormRow>

      <FormRow label="Social Security">
        <SocialSecurityInput
            socialSecurity={this.props.fieldValues.socialSecurity}
            onFirstPartChange={(first) => this.setSocialSecurityInfo('first', first)}
            onSecondPartChange={(second) => this.setSocialSecurityInfo('second', second)}
            onThirdPartChange={(third) => this.setSocialSecurityInfo('third', third)} />
      </FormRow>

      <FormRow label="Address">
        <AddressInput
            address={this.props.fieldValues.address}
            streetPlaceholder="Home Address"
            onStreetChange={(street) => this.setAddressInfo('street', street)}
            onCityChange={(city) => this.setAddressInfo('city', city)}
            onStateChange={(state) => this.setAddressInfo('state', state)}
            onZipChange={(zip) => this.setAddressInfo('zip', zip)} />
      </FormRow>

      <div className="pull-right">
        <button onClick={this.saveAndContinue} type="button" className="btn btn-success">Continue</button>
      </div>

      </div>
    )
  }
})
