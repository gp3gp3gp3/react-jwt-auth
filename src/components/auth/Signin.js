import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'

const renderInput = field =>
  <div>
    <input {...field.input} type={field.type} className='form-control' />
  </div>

class Signin extends Component {
  constructor () {
    super()
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit ({ email, password }) {
    this.props.signInUser({ email, password })
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

  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <Field
            name='email'
            component={renderInput}
            type='text'
          />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <Field
            name='password'
            component={renderInput}
            type='password'
          />
        </fieldset>
        {this.renderAlert()}
        <button action='submit' className='btn btn-primary'>Sign in</button>
      </form>
    )
  }
}

Signin.propTypes = {
  signInUser: React.PropTypes.func,
  errorMessage: React.PropTypes.string,
  handleSubmit: React.PropTypes.func
}

function mapStateToProps (state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'signin'
}, mapStateToProps, actions)(Signin)
