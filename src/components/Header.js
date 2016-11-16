import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

class Login extends Component {
  static muiName = 'FlatButton'

  render () {
    return (
      <div>
        <FlatButton
          {...this.props}
          label='Login'
          containerElement={<Link to='/signin' />}
        />
        <FlatButton
          {...this.props}
          label='Sign Up'
          containerElement={<Link to='/signup' />}
        />
      </div>
    )
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText='Sign out' />
  </IconMenu>
)

Logged.muiName = 'IconMenu'

class Header extends Component {
  // renderLinks () {
  //   if (this.props.authenticated) {
  //     return (
  //       <nav className='navbar navbar-light'>
  //         <Link to='/tasks' className='navbar-brand'>Tasks List</Link>
  //         <ul className='nav navbar-nav'>
  //           <li className='nav-item'>
  //             <Link to='/signout' className='nav-link'>Sign Out</Link>
  //           </li>
  //         </ul>
  //       </nav>
  //     )
  //   } else {
  //     return (
  //       <nav className='navbar navbar-light'>
  //         <Link to='/' className='navbar-brand'>Tasks List</Link>
  //         <ul className='nav navbar-nav'>
  //           <li className='nav-item'>
  //             <Link to='/signin' className='nav-link'>Sign In</Link>
  //           </li>
  //           <li className='nav-item'>
  //             <Link to='/signup' className='nav-link'>Sign Up</Link>
  //           </li>
  //         </ul>
  //       </nav>
  //     )
  //   }
  // }

  render () {
    const { authenticated } = this.props
    return (
      <div>
        <AppBar
          title='Tasks List'
          iconElementLeft={
            <IconButton containerElement={<Link to='/' />}>
              <ActionHome />
            </IconButton>
          }
          iconElementRight={authenticated ? <Logged /> : <Login />}
        />
      </div>
    )
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
