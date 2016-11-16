import React, { Component } from 'react'
import Header from './Header'
import RaisedButton from 'material-ui/RaisedButton'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <RaisedButton label='default' />
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.object
}

export default App
