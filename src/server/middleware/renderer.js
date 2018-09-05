import React from 'react'
import { readFile } from 'fs'
import { resolve as resolvePath } from 'path'
import { Provider as MobxProvider } from 'mobx-react'
import { renderToString } from 'react-dom/server'
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { StaticRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme, createGenerateClassName, } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

import App from '../../shared/App'
import BlockStore from '../../shared/stores/BlockStore'
import DelegateStore from '../../shared/stores/DelegateStore'
import NodeApi from '../../shared/domain/api/NodeApi'
import RoundStore from '../../shared/stores/RoundStore'
import SlotStore from '../../shared/stores/SlotStore'


const renderFullPage = async (html, css) => 
  new Promise((resolve, reject) => {
    const filePath = resolvePath(__dirname, '..', '..', '..', 'public', 'index.html')
  
    readFile(filePath, 'utf8', (err, page) => {
      if (err) {
        return reject(err)
      }

      resolve(page.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      ).replace(
        '<style id="jss-server-side"></style>',
        `<style id="jss-server-side">${css}</style>`
      ))
    })
  })


export default (req, res) => {
  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry()

  console.log(`Serving ${req.url}`)

  // Create a theme instance.
  const theme = createMuiTheme({
    palette: {
      primary: green,
      accent: red,
      type: 'light',
    },
  })

  const generateClassName = createGenerateClassName()
  const nodeApi = new NodeApi()
  const delegateStore = new DelegateStore(nodeApi)
  const roundStore = new RoundStore(nodeApi)
  const blockStore = new BlockStore(nodeApi, roundStore)
  const slotStore = new SlotStore(blockStore, delegateStore, roundStore)
  
  const stores = {
    blockStore,
    roundStore,
    slotStore,
  }

  // Render the component to a string.
  const html = renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <MobxProvider {... stores}>
          <StaticRouter location={req.url} context={{}}>
            <App />
          </StaticRouter>
        </MobxProvider>
      </MuiThemeProvider>
    </JssProvider>
  )

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString()

  const runner = async () => {
    try {
      const pageHtml = await renderFullPage(html, css)
      res.send(pageHtml)
    } catch (ex) {
      console.log(`Error in server: ${ex}`)
      res.status(500).end()
    }
  }
  runner()
}
