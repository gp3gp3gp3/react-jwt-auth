import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import NewTask from './NewTask'

class Tasks extends Component {
  componentWillMount () {
    this.props.fetchTasks()
  }

  renderTasks () {
    const { tasks } = this.props

    if (!tasks) {
      return <li>Loading...</li>
    }
    return this.props.tasks.map(task => <li key={task.id}>{task.title}</li>)
  }

  render () {
    return (
      <div>
        <h1>Tasks page</h1>
        <NewTask {...this.props} />
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    )
  }
}

Tasks.propTypes = {
  tasks: React.PropTypes.array,
  fetchTasks: React.PropTypes.func
}

function mapStateToProps (state) {
  return { tasks: state.auth.tasks }
}

export default connect(mapStateToProps, actions)(Tasks)