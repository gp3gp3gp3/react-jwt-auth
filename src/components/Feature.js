import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Feature extends Component {
  componentWillMount () {
    this.props.fetchMessage()
  }

  renderTasks () {
    const { tasks } = this.props

    if (!tasks) {
      return <li>Loading...</li>
    }
    return this.props.tasks.map((task, i) => <li key={i}>{task.title}</li>)
  }

  render () {
    return (
      <div>
        <h1>Feature page</h1>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    )
  }
}

Feature.propTypes = {
  tasks: React.PropTypes.array,
  fetchMessage: React.PropTypes.func
}

function mapStateToProps (state) {
  return { tasks: state.auth.tasks }
}

export default connect(mapStateToProps, actions)(Feature)
