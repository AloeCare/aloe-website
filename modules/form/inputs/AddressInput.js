import React from 'react'

var states = [
  { name: "ALABAMA", abbreviation: "AL" },
  { name: "ALASKA", abbreviation: "AK" },
  { name: "ARIZONA", abbreviation: "AZ" },
  { name: "ARKANSAS", abbreviation: "AR" },
  { name: "CALIFORNIA", abbreviation: "CA" },
  { name: "COLORADO", abbreviation: "CO" },
  { name: "CONNECTICUT", abbreviation: "CT" },
  { name: "DELAWARE", abbreviation: "DE" },
  { name: "FLORIDA", abbreviation: "FL" },
  { name: "GEORGIA", abbreviation: "GA" },
  { name: "GUAM", abbreviation: "GU" },
  { name: "HAWAII", abbreviation: "HI" },
  { name: "IDAHO", abbreviation: "ID" },
  { name: "ILLINOIS", abbreviation: "IL" },
  { name: "INDIANA", abbreviation: "IN" },
  { name: "IOWA", abbreviation: "IA" },
  { name: "KANSAS", abbreviation: "KS" },
  { name: "KENTUCKY", abbreviation: "KY" },
  { name: "LOUISIANA", abbreviation: "LA" },
  { name: "MAINE", abbreviation: "ME" },
  { name: "MARYLAND", abbreviation: "MD" },
  { name: "MASSACHUSETTS", abbreviation: "MA" },
  { name: "MICHIGAN", abbreviation: "MI" },
  { name: "MINNESOTA", abbreviation: "MN" },
  { name: "MISSISSIPPI", abbreviation: "MS" },
  { name: "MISSOURI", abbreviation: "MO" },
  { name: "MONTANA", abbreviation: "MT" },
  { name: "NEBRASKA", abbreviation: "NE" },
  { name: "NEVADA", abbreviation: "NV" },
  { name: "NEW HAMPSHIRE", abbreviation: "NH" },
  { name: "NEW JERSEY", abbreviation: "NJ" },
  { name: "NEW MEXICO", abbreviation: "NM" },
  { name: "NEW YORK", abbreviation: "NY" },
  { name: "NORTH CAROLINA", abbreviation: "NC" },
  { name: "NORTH DAKOTA", abbreviation: "ND" },
  { name: "OHIO", abbreviation: "OH" },
  { name: "OKLAHOMA", abbreviation: "OK" },
  { name: "OREGON", abbreviation: "OR" },
  { name: "PENNSYLVANIA", abbreviation: "PA" },
  { name: "PUERTO RICO", abbreviation: "PR" },
  { name: "RHODE ISLAND", abbreviation: "RI" },
  { name: "SOUTH CAROLINA", abbreviation: "SC" },
  { name: "SOUTH DAKOTA", abbreviation: "SD" },
  { name: "TENNESSEE", abbreviation: "TN" },
  { name: "TEXAS", abbreviation: "TX" },
  { name: "UTAH", abbreviation: "UT" },
  { name: "VERMONT", abbreviation: "VT" },
  { name: "VIRGIN ISLANDS", abbreviation: "VI" },
  { name: "VIRGINIA", abbreviation: "VA" },
  { name: "WASHINGTON", abbreviation: "WA" },
  { name: "WEST VIRGINIA", abbreviation: "WV" },
  { name: "WISCONSIN", abbreviation: "WI" },
  { name: "WYOMING", abbreviation: "WY" },
]

export default React.createClass({
  getInitialState: function() {
    return {
      address: this.props.address || {}
    }
  },
  
  render: function(){
    var address = this.state.address;

    var stateOptions = [];
    stateOptions.push(<option key='0'>ST</option>);

    for (var i = 0; i < states.length; i++) {
      var state = states[i];
      stateOptions.push(<option key={i+1} value={state.abbreviation}>{state.abbreviation}</option>);
    }

    return (
      <div>
        <div className="row">
          <input
              className="col-md-12"
              type="text"
              defaultValue={address.street}
              placeholder={this.props.streetPlaceholder}
              onChange={(input) => this.props.onStreetChange(input.target.value)} />
        </div>
        <div className="row">
          <input
              className="col-md-8"
              type="text"
              defaultValue={address.city}
              placeholder="City"
              onChange={(input) => this.props.onCityChange(input.target.value)} />
          <select
              className="col-md-1"
              type="text"
              defaultValue={address.state}
              onChange={(select) => this.props.onStateChange(select.target.value)}>
            {stateOptions}
          </select>
          <input
              className="col-md-3"
              type="text"
              defaultValue={address.zip}
              placeholder="Zip"
              maxLength="5"
              onChange={(input) => this.props.onZipChange(input.target.value)} />
        </div>
      </div>
    )
  }
})
