import React from 'react'
import ReactDOM from 'react-dom'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'
import reducers from './reducers'
import './styles/app.scss'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Welcome} />
        <Route path='/signup' component={Signup} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
)
