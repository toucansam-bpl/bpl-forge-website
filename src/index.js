import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserHistory } from 'history'
import { Provider } from 'mobx-react'
import { Router, Route, Switch } from 'react-router-dom'

import App from './App'
import 'assets/css/material-dashboard-react.css?v=1.2.0'
import BitApi from './domain/api/BitApi'
import DelegateStore from './stores/DelegateStore'
import './index.css'
import NodeApi from './domain/api/NodeApi'
import PriceApi from './domain/api/PriceApi'
import registerServiceWorker from './registerServiceWorker'
import UiStore from './stores/UiStore'

const hist = createBrowserHistory()
const nodeApi = new NodeApi()
const stores = {
  ui: new UiStore(new BitApi(), nodeApi, new PriceApi()),
  delegateStore: new DelegateStore(nodeApi),
}

ReactDOM.render(
  <Provider {...stores}>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
