import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Task extends Component {
  constructor () {
    super()
    this.state = {
      title: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount () {
    this.setState({title: this.props.title})
  }

  handleFormSubmit (event) {
    const { title } = this.state
    const { id, editTask } = this.props
    event.preventDefault()
    editTask({title, id})
  }

  handleInputChange (event) {
    this.setState({title: event.target.value})
  }

  render () {
    const {
      onEditClick,
      editing,
      onDelClick
    } = this.props

    const { title } = this.state

    if (editing) {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <fieldset className='form-group'>
            <label>Title:</label>
            <input type='text' value={title} onChange={this.handleInputChange} />
            <button action='submit' className='btn btn-primary'>Submit</button>
            <button onClick={onEditClick} className='btn btn-secondary'>Cancel</button>
          </fieldset>
        </form>
      )
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
  onDelClick: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  editTask: React.PropTypes.func
}

export default Task = connect(null, actions)(Task) // eslint-disable-line
