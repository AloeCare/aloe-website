import React from 'react'
import Footer from './Footer'
import Home from './Home'
import NavBar from './NavBar'

export default React.createClass({
  render() {
    return (
      <div>
        <NavBar/>

  			{this.props.children || <Home/>}

        <Footer/>
      </div>
    )
  }
})
