import { action,
         computed, 
         decorate,
         observable,
       } from 'mobx'
import { task } from 'mobx-task'


export default class NetworkStore {
  seedNodes = []

  constructor(nodeApi) {
    this.nodeApi = nodeApi
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

    for (let i = 0; i < seedNodes.length; i += 1) {
      let server = seedNodes[i]
      let status = await this.nodeApi.getSyncStatus()
      this.seedNodes.push({
        server,
        height: status.height,
      })
    }

    console.log(seedNodeStatus)
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
}

decorate(NetworkStore, {
  init: task,
  networkHeight: computed,
  seedNodes: observable,
  seedStatus: computed,
})
