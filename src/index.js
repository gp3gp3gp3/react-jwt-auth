import React from 'react'
import ReactDOM from 'react-dom'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import App from './components/App'
import Welcome from './components/Welcome'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Signout from './components/auth/Signout'
import RequireAuth from './components/auth/RequireAuth'
import RedirectRoot from './components/auth/RedirectRoot'
import Tasks from './components/tasks/index'
import { AUTH_USER } from './actions/types'
import reducers from './reducers'
import './styles/app.scss'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

const token = localStorage.getItem('token')
if (token) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={RedirectRoot(Welcome)} />
          <Route path='signin' component={Signin} />
          <Route path='signup' component={Signup} />
          <Route path='signout' component={Signout} />
          <Route path='tasks' component={RequireAuth(Tasks)} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('.container')
)
