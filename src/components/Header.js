import React, { Component } from 'react'

class Header extends Component {
  renderLinks () {
    return <li className='nav-item'>
      Sign Out
    </li>
  }

  render () {
    return (
      <nav className='navbar navbar-light'>
        <a className='navbar-brand'>Tasks List</a>
        <ul className='nav navbar-nav'>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

export default Header
