import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="row">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/clinics/1">Patients</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
})
