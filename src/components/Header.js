import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  renderLinks () {
    return <li className='nav-item'>
      Sign Out
    </li>
  }

  render () {
    return (
      <nav className='navbar navbar-light'>
        <Link to='/' className='navbar-brand'>Tasks List</Link>
        <ul className='nav navbar-nav'>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

export default Header
