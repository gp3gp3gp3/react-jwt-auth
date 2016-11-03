import React, { Component } from 'react'

class Task extends Component {


  render () {
    const { task } = this.props

    return (
      <li>
        {task.title} | <a href='#'>Edit</a> | <a href='#'>Delete</a>
      </li>
    )
  }
}

Task.propTypes = {
  task: React.PropTypes.object
}

export default Task
