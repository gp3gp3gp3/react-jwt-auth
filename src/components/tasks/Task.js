import React, { Component } from 'react'

class Task extends Component {

  render () {
    const {
      onEditClick,
      editing,
      title,
      onDelClick
    } = this.props

    if (editing) {
      return <li onClick={onEditClick}>Edit me here</li>
    }
    return (
      <li>
        {title} | <a onClick={onEditClick} href='#'>Edit</a> | <a onClick={onDelClick} href='#'>Delete</a>
      </li>
    )
  }
}

Task.propTypes = {
  title: React.PropTypes.string,
  id: React.PropTypes.number,
  onEditClick: React.PropTypes.func,
  editing: React.PropTypes.bool,
  onDelClick: React.PropTypes.func
}

export default Task
