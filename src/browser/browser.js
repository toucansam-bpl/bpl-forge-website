import React from 'react'
import { Provider as MobxProvider } from 'mobx-react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'


import App from '../shared/App'
import BlockStore from '../shared/stores/BlockStore'
import DelegateStore from '../shared/stores/DelegateStore'
import NodeApi from '../shared/domain/api/NodeApi'
import PriceStore from '../shared/stores/PriceStore'
import RoundStore from '../shared/stores/RoundStore'
import SlotStore from '../shared/stores/SlotStore'
import NetworkStore from '../shared/stores/NetworkStore';


class Main extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return <App />
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: grey,
    accent: red,
    type: 'light',
  },
})

const nodeApi = new NodeApi()
const priceStore = new PriceStore()
const delegateStore = new DelegateStore(nodeApi)
const networkStore = new NetworkStore(nodeApi)
const roundStore = new RoundStore(nodeApi)
const blockStore = new BlockStore(nodeApi, roundStore)
const slotStore = new SlotStore(blockStore, delegateStore, roundStore)

const stores = {
  blockStore,
  delegateStore,
  networkStore,
  priceStore,
  roundStore,
  slotStore,
}

delegateStore.init()
networkStore.init()
roundStore.init()
slotStore.init()


hydrate(
  <MuiThemeProvider theme={theme}>
    <MobxProvider {... stores}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </MobxProvider>
  </MuiThemeProvider>,
  document.querySelector('#root'),
)
