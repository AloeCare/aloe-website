import React from 'react'

export default React.createClass({
  render: function(){
    return (
      <div className="row">
        <label className="col-md-2">{this.props.label}</label>
        <div className="col-md-10">
          {this.props.children}
        </div>
      </div>
    )
  }
})