import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserHistory } from 'history'
import { Provider } from 'mobx-react'
import { Router, Route, Switch } from 'react-router-dom'

import App from './App'
import 'assets/css/material-dashboard-react.css?v=1.2.0'
import BitApi from './domain/api/BitApi'
import './index.css'
import NodeApi from './domain/api/NodeApi'
import PriceApi from './domain/api/PriceApi'
import registerServiceWorker from './registerServiceWorker'
import UiStore from './stores/UiStore'

const hist = createBrowserHistory()
const uiStore = new UiStore(new BitApi(), new NodeApi(), new PriceApi())

ReactDOM.render(
  <Provider ui={uiStore}>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
