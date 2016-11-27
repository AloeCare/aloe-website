import React from 'react'

export default React.createClass({
  render: function(){
    return (
      <div className="row">
        <select
            className="col-md-2"
            type="text"
            defaultValue={this.props.defaultValue}
            onChange={(select) => this.props.onChange(select.target.value)}>
          <option>Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    )
  }
})
