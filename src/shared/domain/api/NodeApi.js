import fetch from 'node-fetch'
import qs from 'querystring'


async function makeApiRequest(url, params) {
  return new Promise(async (resolve, reject) => {
    try {
      const query = params ? `?${qs.stringify(params)}` : ''
      const requestUrl = `${url}${query}`

      const rawResponse = await fetch(requestUrl, {
        method: 'GET',
      })
      const response = await rawResponse.json()

      if (response.success) {
        resolve(response)
      } else {
        console.log(response)
        reject(new Error(`Request did not complete successfully.`))
      }
    } catch (err) {
      reject(err)
    }
  })
}

export default class NodeApi {
  apiServer = 'https://api.bplforge.com'

  async getActiveDelegates() {
    return makeApiRequest(this.getUrl('delegates'), 0, 201)
    /*
    return {
      delegates: [
        { publicKey: 1, blockRoundSlot: 1, username: 'Delegate 1', },
        { publicKey: 2, blockRoundSlot: 2, username: 'Delegate 2', },
        { publicKey: 3, blockRoundSlot: 3, username: 'Delegate 3', },
        { publicKey: 4, blockRoundSlot: 4, username: 'Delegate 4', },
        { publicKey: 5, blockRoundSlot: 5, username: 'Delegate 5', },
      ]
    }
    */
  }

  async getBlocks(offset = 0, limit = 100) {
    return makeApiRequest(this.getUrl('blocks'), { limit, offset })
  }

  async getCurrentRound() {
    return makeApiRequest(this.getUrl('rounds'))
    /*
    return {
      delegateActivity: [
        { publicKey: 1, hasMissedBlock: false, roundSlot: 1, totalForged: '12345668.823422', },
        { publicKey: 2, hasMissedBlock: true, roundSlot: 2, totalForged: '23424.823422', },
        { publicKey: 3, hasMissedBlock: false, roundSlot: 3, totalForged: '23893054.823422', },
      ],
      expectedForgers: [
        { publicKey: 4, blockRoundSlot: 4, username: 'Delegate 4', },
        { publicKey: 5, blockRoundSlot: 5, username: 'Delegate 5', },
      ],
    }
    */
  }

  async getRewardBlocks(generatorPublicKey) {
    return makeApiRequest(this.getUrl('blocks'), { generatorPublicKey })
  }

  async getSyncStatus(server) {
    return makeApiRequest(this.getUrl('loader/status/sync', server))
  }

  async getTransactions(address) {
    return makeApiRequest(this.getUrl('transactions'), {
      senderId: address,
      recipientId: address,
    })
  }

  getUrl(path, alternateServer) {
    const server = alternateServer || this.apiServer
    return `${server}/api/${path}`
  }

  async getVoters(publicKey) {
    return makeApiRequest(this.getUrl('delegates/voters'), { publicKey })
  }
}
