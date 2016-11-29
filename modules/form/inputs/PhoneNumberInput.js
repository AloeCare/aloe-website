import React from 'react'

export default React.createClass({
  render: function(){
    var phoneNumber = this.props.defaultPhoneNumber || {};
    return (
      <div className="row">
        <input
            className="col-md-2"
            type="text"
            defaultValue={phoneNumber.areaCode}
            placeholder="(###)"
            maxLength="3"
            onChange={(input) => this.props.onAreaCodeChange(input.target.value)} />
        <input
            className="col-md-2"
            type="text"
            defaultValue={phoneNumber.exchange}
            placeholder="###"
            maxLength="3"
            onChange={(input) => this.props.onExchangeChange(input.target.value)} />
        <input
            className="col-md-2"
            type="text"
            defaultValue={phoneNumber.line}
            placeholder="####"
            maxLength="4"
            onChange={(input) => this.props.onLineChange(input.target.value)} />
      </div>
    )
  }
})
