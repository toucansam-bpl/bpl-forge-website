import { getUrl, makeApiRequest } from '../../shared/domain/api/makeApiRequest'


let networkStatus = null
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

export default function getNetworkStatus() {
  return new Promise(async (resolve, reject) => {
    try {
      if (networkStatus === null) {
        networkStatus = await loadNetworkStatus()
      }
      resolve(networkStatus)
    } catch (ex) {
      reject(ex)
    }
  })
}

async function loadNetworkStatus() {
  return new Promise(async (resolve, reject) => {
    try {
      const seedNodeStatus = []
      for (let i = 0; i < seedNodes.length; i += 1) {
        let server = seedNodes[i]
        let status = await getSyncStatus(server)
        seedNodeStatus.push({
          server,
          height: status.height,
        })
      }
      resolve({
        seedNodes: seedNodeStatus,
      })
    } catch (ex) {
      reject(ex)
    }
  })
}

async function getSyncStatus(server) {
  return makeApiRequest(getUrl(server, 'loader/status/sync'))
}

async function refreshNetworkStatus() {
  networkStatus = await loadNetworkStatus()
}

refreshNetworkStatus()
setInterval(() => refreshNetworkStatus(), 30000)
