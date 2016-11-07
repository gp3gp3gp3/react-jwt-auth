import axios from 'axios'
import { browserHistory } from 'react-router'
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_TASKS,
  TOGGLE_EDIT_TASK
} from './types'
import { reset } from 'redux-form'

let ROOT_URL

if (process.env.NODE_ENV !== 'production') {
  ROOT_URL = 'http://localhost:3090'
} else {
  ROOT_URL = 'https://gp3-node-server.herokuapp.com'
}

export function signinUser ({ email, password }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER })
      localStorage.setItem('token', response.data.token)
      browserHistory.push('/tasks')
    })
    .catch(() => {
      dispatch(authError('Bad Login Info'))
    })
  }
}

export function signupUser ({ email, password }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER })
      localStorage.setItem('token', response.data.token)
      browserHistory.push('/tasks')
    })
    .catch(response => dispatch(authError(response.data.error)))
  }
}

export function authError (error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser () {
  localStorage.removeItem('token')

  return { type: UNAUTH_USER }
}

export function fetchTasks () {
  return function (dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_TASKS,
        payload: response.data.tasks
      })
    })
  }
}

export function createTask ({ title }) {
  return function (dispatch) {
    axios.post(ROOT_URL, { title }, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch(fetchTasks())
      dispatch(reset('newTask'))
    })
  }
}

export function deleteTask (id) {
  return function (dispatch) {
    axios.delete(`${ROOT_URL}/tasks/${id}`, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch(fetchTasks())
    })
  }
}

export function toggleEditTask (id) {
  return {
    type: TOGGLE_EDIT_TASK,
    payload: id
  }
}

export function editTask ({ title, id }) {
  return function (dispatch) {
    axios.put(`${ROOT_URL}/tasks/${id}`, { title }, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch(fetchTasks())
    })
  }
}
