import React, { Component } from 'react'

class Task extends Component {

  render () {
    const { task, onDelClick } = this.props

    return (
      <li>
        {task.title} | <a href='#'>Edit</a> | <a onClick={onDelClick} href='#'>Delete</a>
      </li>
    )
  }
}

Task.propTypes = {
  task: React.PropTypes.object,
  onDelClick: React.PropTypes.func
}

export default Task
