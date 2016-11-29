import React from 'react'

export default React.createClass({
  getInitialState: function() {
    return {
      socialSecurity: this.props.socialSecurity || {}
    }
  },

  render: function(){
    var socialSecurity = this.state.socialSecurity;
    return (
      <div className="row">
        <input
            className="col-md-2"
            type="password"
            defaultValue={socialSecurity.first}
            placeholder="###"
            maxLength="3"
            onChange={(input) => this.props.onFirstPartChange(input.target.value)} />
        <input
            className="col-md-1"
            type="password"
            defaultValue={socialSecurity.second}
            placeholder="##"
            maxLength="2"
            onChange={(input) => this.props.onSecondPartChange(input.target.value)} />
        <input
            className="col-md-2"
            type="password"
            defaultValue={socialSecurity.third}
            placeholder="####"
            maxLength="4"
            onChange={(input) => this.props.onThirdPartChange(input.target.value)} />
      </div>
    )
  }
})
