import React from 'react'
import MonthSelect from './MonthSelect'
import DaySelect from './DaySelect'
import YearSelect from './YearSelect'

export default React.createClass({
  render: function(){
    var birthDate = this.props.defaultBirthDate || {};
    return (
      <div className="row">
        <MonthSelect
            displayType="nameOnly"
            defaultValue={birthDate.month}
            onChange={(select) => this.props.onMonthChange(select.target.value)} />
        <DaySelect
            maxDays='31'
            defaultValue={birthDate.day}
            onChange={(select) => this.props.onDayChange(select.target.value)} />
        <YearSelect
            firstYear='1899'
            lastYear='2016'
            defaultValue={birthDate.year}
            onChange={(select) => this.props.onYearChange(select.target.value)} />
      </div>
    )
  }
})
