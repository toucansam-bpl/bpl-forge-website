import React from 'react'
import { Provider as MobxProvider } from 'mobx-react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'


import App from '../shared/App'
import BlockStore from '../shared/stores/BlockStore'
import NodeApi from '../shared/domain/api/NodeApi'
import RoundStore from '../shared/stores/RoundStore'
import SlotStore from '../shared/stores/SlotStore'


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
    primary: green,
    accent: red,
    type: 'light',
  },
})

const nodeApi = new NodeApi()
const roundStore = new RoundStore(nodeApi)
const blockStore = new BlockStore(nodeApi, roundStore)
const slotStore = new SlotStore(nodeApi, blockStore, roundStore)

const stores = {
  blockStore,
  roundStore,
  slotStore,
}

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
