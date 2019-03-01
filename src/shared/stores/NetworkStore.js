import { action,
         computed, 
         decorate,
         observable,
         runInAction,
       } from 'mobx'
import { task } from 'mobx-task'


export default class NetworkStore {
  apiServers = [
    { name: 'https://api.bplforge.com', url: 'https://api.bplforge.com' },
    { name: 'https://explorer.dated.fun', url: 'https://explorer.dated.fun/node' },
    { name: 'https://api.blockpool.io', url: 'https://api.blockpool.io' },
  ]
  apiServer = this.apiServers[0]
  seedNodes = []

  constructor(nodeApi, roundStore) {
    this.nodeApi = nodeApi
    this.roundStore = roundStore
  }

  async init() {
    const seedNodes = [
      'http://s01.mc.blockpool.io:9030'
    , 'http://s02.mc.blockpool.io:9030'
    , 'http://s03.mc.blockpool.io:9030'
    , 'http://s04.mc.blockpool.io:9030'
    , 'http://s05.mc.blockpool.io:9030'
    , 'http://s06.mc.blockpool.io:9030'
    , 'http://s07.mc.blockpool.io:9030'
    , 'http://s08.mc.blockpool.io:9030'
    , 'http://s09.mc.blockpool.io:9030'
    , 'http://s10.mc.blockpool.io:9030'
    ]

    const seedNodeStatus = []
    for (let i = 0; i < seedNodes.length; i += 1) {
      let server = seedNodes[i]
      let status = await this.nodeApi.getSyncStatus()
      seedNodeStatus.push({
        server,
        height: status.height,
      })
    }

    runInAction(() => {
      this.seedNodes.replace(seedNodeStatus)
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
    this.roundStore.init()
  }
}

decorate(NetworkStore, {
  apiServer: observable,
  apiServers: observable,
  init: task,
  networkHeight: computed,
  seedNodes: observable,
  seedStatus: computed,
  setApiServer: action,
})
