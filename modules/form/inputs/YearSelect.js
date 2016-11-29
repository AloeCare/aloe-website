import React from 'react'

export default React.createClass({
  render: function(){
    var options = [];
    options.push(<option key='0'>Year</option>);

    for (var i = this.props.lastYear; i >= this.props.firstYear; --i) {
      options.push(<option key={i} value={i}>{i}</option>)
    };

    return (
      <select
          className="col-md-1"
          type="text"
          onChange={this.props.onChange}
          defaultValue={this.props.defaultValue}>
        {options}
      </select>
    )
  }
})