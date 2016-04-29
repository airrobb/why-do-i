import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from './components/App.jsx'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'

require('../styles/main.scss')

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
      <AppContainer />
  </Provider>,
  document.getElementById('app')
)
