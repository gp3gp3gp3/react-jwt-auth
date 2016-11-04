import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'

class Task extends Component {
  constructor () {
    super()
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit (props) {
    this.props.editTask(props)
  }

  render () {
    const {
      onEditClick,
      editing,
      title,
      handleSubmit,
      onDelClick
    } = this.props

    if (editing) {
      return (
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <fieldset className='form-group'>
            <label onClick={onEditClick}>Title:</label>
            <Field name='title' component='input' type='text' />
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

function mapStateToProps (state, ownProps) {
  return {
    initialValues: {
      title: ownProps.title,
      id: ownProps.id
    }
  }
}

Task = reduxForm({ // eslint-disable-line
  form: 'editTask'
})(Task)

export default Task = connect(mapStateToProps, actions)(Task) // eslint-disable-line
