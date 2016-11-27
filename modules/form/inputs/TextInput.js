import React from 'react'

export default React.createClass({
  render: function(){
    return (
      <div className="row">
        <input
            className="col-md-5"
            type="text"
            defaultValue={this.props.defaultValue}
            placeholder={this.props.placeholder}
            onChange={(input) => this.props.onChange(input.target.value)} />
      </div>
    )
  }
})
