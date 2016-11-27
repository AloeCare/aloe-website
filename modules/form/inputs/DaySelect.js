import React from 'react'

export default React.createClass({
  render: function(){
    var options = [];
    options.push(<option key='0'>Day</option>);

    for (var i = 1; i <= this.props.maxDays; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }

    // TODO dynamically change day count depending on selected month
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