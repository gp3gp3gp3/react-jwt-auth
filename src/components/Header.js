import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Header extends Component {
  renderLinks () {
    if (this.props.authenticated) {
      return (
        <nav className='navbar navbar-light'>
          <Link to='/tasks' className='navbar-brand'>Tasks List</Link>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <Link to='/tasks/new' className='nav-link'>Create Task</Link>
            </li>
            <li className='nav-item'>
              <Link to='/signout' className='nav-link'>Sign Out</Link>
            </li>
          </ul>
        </nav>
      )
    } else {
      return (
        <nav className='navbar navbar-light'>
          <Link to='/' className='navbar-brand'>Tasks List</Link>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <Link to='/signin' className='nav-link'>Sign In</Link>
            </li>
            <li className='nav-item'>
              <Link to='/signup' className='nav-link'>Sign Up</Link>
            </li>
          </ul>
        </nav>
      )
    }
  }

  render () {
    return this.renderLinks()
  }
}

Header.propTypes = {
  authenticated: React.PropTypes.bool
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header)
