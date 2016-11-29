import React from 'react'

export default React.createClass({
  render: function(){
    return (
      <div className="row">
        <input
            className="col-md-5"
            type="text"
            defaultValue={this.props.firstName}
            placeholder="First Name"
            onChange={(input) => this.props.onFirstNameChange(input.target.value)} />
        <input
            className="col-md-2"
            type="text"
            defaultValue={this.props.middleInitial}
            placeholder="M.I."
            maxLength="1"
            onChange={(input) => this.props.onMiddleInitialChange(input.target.value)} />
        <input
            className="col-md-5"
            type="text"
            ref="lastName"
            defaultValue={this.props.lastName}
            placeholder="Last Name"
            onChange={(input) => this.props.onLastNameChange(input.target.value)} />
      </div>
    )
  }
})
