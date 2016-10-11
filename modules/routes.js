import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Clinics from './Clinics'
import Home from './Home'
import Patients from './Patients'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>

    <Route path="/clinics" component={Clinics}/>
    <Route path="/clinics/:clinicId" component={Patients}/>
  </Route>
)
