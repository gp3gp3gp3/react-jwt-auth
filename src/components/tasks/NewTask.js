import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'

const renderInput = field =>
  <div>
    <input {...field.input} type={field.type} className='form-control' />
  </div>

class NewTask extends Component {
  constructor () {
    super()
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  handleFormSubmit ({ title }) {
    console.log('Im in handle form submit, here this.props', this.props)
    console.log('heres title', title)
    this.props.createTask({ title })
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className='form-group'>
          <label>Title:</label>
          <Field
            name='title'
            component={renderInput}
            type='text'
          />
        </fieldset>
        {this.renderAlert()}
        <button action='submit' className='btn btn-primary'>Create</button>
      </form>
    )
  }
}

NewTask.propTypes = {
  errorMessage: React.PropTypes.string,
  handleSubmit: React.PropTypes.func,
  createTask: React.PropTypes.func
}

function mapStateToProps (state) {
  return { errorMessage: state.auth.error }
}

NewTask = reduxForm({ // eslint-disable-line
  form: 'newTask'
})(NewTask)

export default NewTask = connect(mapStateToProps, actions)(NewTask) // eslint-disable-line
