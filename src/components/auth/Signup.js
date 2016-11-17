import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import * as actions from '../../actions'

const paperStyle = {
  height: 400,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
}

const renderInput = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    style={{textAlign: 'initial'}}
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

renderInput.propTypes = {
  input: React.PropTypes.object,
  label: React.PropTypes.string,
  meta: React.PropTypes.object
}

class Signup extends Component {
  constructor () {
    super()
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit (formProps) {
    this.props.signupUser(formProps)
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div style={{color: 'rgb(244, 67, 54)'}}>
          {this.props.errorMessage}
        </div>
      )
    }
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <div style={{textAlign: 'center'}}>
        <Paper style={paperStyle} zDepth={1}>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>
            <div>
              <Field
                name='email'
                component={renderInput}
                label='Email'
              />
            </div>
            <div>
              <Field
                name='password'
                component={renderInput}
                label='Password'
                type='password'
              />
            </div>
            <div>
              <Field
                name='passwordConfirm'
                component={renderInput}
                label='Password Confirm'
                type='password'
              />
            </div>
            {this.renderAlert()}
            <RaisedButton
              label='Submit'
              action='submit'
              style={{margin: 25}}
              primary
              type='submit'
            />
          </form>
        </Paper>
      </div>
    )
  }
}

Signup.propTypes = {
  signupUser: React.PropTypes.func,
  errorMessage: React.PropTypes.string,
  handleSubmit: React.PropTypes.func
}

const validate = values => {
  const errors = {}
  const requiredFields = ['email', 'password', 'passwordConfirm']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (values.password !== values.passwordConfirm) {
    errors.password = 'Passwords must match'
  }

  return errors
}

function mapStateToProps (state) {
  return { errorMessage: state.auth.error }
}

Signup = reduxForm({ // eslint-disable-line
  form: 'signup',
  validate
})(Signup)

export default Signup = connect(mapStateToProps, actions)(Signup) // eslint-disable-line
