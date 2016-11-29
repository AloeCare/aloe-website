import React from 'react'

export default React.createClass({
  render: function(){
    return (
      <div className="row">
        <input
            className="col-md-1"
            type="text"
            defaultValue={this.props.defaultValue}
            placeholder="##"
            maxLength="2"
            onChange={(input) => this.props.onAgeChange(input.target.value)} />
      </div>
    )
  }
})