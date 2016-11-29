import React from 'react'

var months = [
  { value: 1, number:'01', name: 'January' },
  { value: 2, number:'02', name: 'February' },
  { value: 3, number:'03', name: 'March' },
  { value: 4, number:'04', name: 'April' },
  { value: 5, number:'05', name: 'May' },
  { value: 6, number:'06', name: 'June' },
  { value: 7, number:'07', name: 'July' },
  { value: 8, number:'08', name: 'August' },
  { value: 9, number:'09', name: 'September' },
  { value: 10, number:'10', name: 'October' },
  { value: 11, number:'11', name: 'November' },
  { value: 12, number:'12', name: 'December' }
]

export default React.createClass({
  getInitialState: function() {
    return {
      displayType: this.props.displayType
    };
  },

  renderNumberOnly: function(month) {
    return <option key={month.value} value={month.value}>{month.number}</option>;
  },

  renderNumberAndName: function(month) {
    return  <option key={month.value} value={month.value}>{month.number} {month.name}</option>;
  },

  renderNameOnly: function(month) {
    return <option key={month.value} value={month.value}>{month.name}</option>;
  },

  render: function(){
    var options = [];
    options.push(<option key='0'>Month</option>);

    for (var i = 0; i < months.length; i++) {
      var month = months[i];
      switch(this.state.displayType) {
        case "numberOnly":
          options.push(this.renderNumberOnly(month));
          break;
        case "numberAndName":
          options.push(this.renderNumberAndName(month));
          break;
        case "nameOnly":
          options.push(this.renderNameOnly(month));
          break;
        default:
          options.push(this.renderNumberAndName(month));
      }
    }

    return (
      <select
          className="col-md-2"
          type="text"
          onChange={this.props.onChange}
          defaultValue={this.props.defaultValue}>
        {options}
      </select>
    )
  }
})