import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import Welcome from './components/Welcome'
import './styles/app.scss'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Welcome} />
    </Route>
  </Router>,
  document.querySelector('.container')
)
