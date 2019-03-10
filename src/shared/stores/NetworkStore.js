import { action,
         computed, 
         decorate,
         observable,
         runInAction,
       } from 'mobx'
import { task } from 'mobx-task'

import { makeApiRequest } from '../domain/api/makeApiRequest'


export default class NetworkStore {
  apiServers = [
    { name: 'https://api.bplforge.com', url: 'https://api.bplforge.com' },
    { name: 'https://explorer.dated.fun', url: 'https://explorer.dated.fun/node' },
    { name: 'https://api.blockpool.io', url: 'https://api.blockpool.io' },
  ]
  apiServer = this.apiServers[0]
  hasChangedServer = false
  seedNodes = []

  constructor(nodeApi) {
    this.nodeApi = nodeApi
  }

  async init() {
    const networkStatus = await makeApiRequest('/api/networkStatus')

    runInAction(() => {
      this.seedNodes.replace(networkStatus.seedNodes)
    })
  }

  get networkHeight() {
    return this.seedNodes.reduce((maxHeight, node) => node.height > maxHeight ? node.height : maxHeight, 0)
  }

  get seedStatus() {
    const height = this.networkHeight
    return this.seedNodes.reduce((status, node) => {
      status.total += 1
      if (height - node.height <= 1) {
        status.ok += 1
      }
      return status
    }, {
      ok: 0,
      total: 0,
    })
  }

  setApiServer(serverName) {
    const selectedServer = this.apiServers.filter(s => s.name === serverName)[0]
    this.apiServer = selectedServer
    this.nodeApi.setApiServer(selectedServer.url)
    this.hasChangedServer = true
  }
}

decorate(NetworkStore, {
  apiServer: observable,
  apiServers: observable,
  hasChangedServer: observable,
  init: task,
  networkHeight: computed,
  seedNodes: observable,
  seedStatus: computed,
  setApiServer: action,
})
