import fetch from 'node-fetch'
import qs from 'querystring'

const api = 'https://api.bplforge.com/api'

async function makeApiRequest(url, params) {
  return new Promise(async (resolve, reject) => {
    try {
      const query = params ? `?${qs.stringify(params)}` : ''
      const requestUrl = `${api}/${url}${query}`

      const rawResponse = await fetch(requestUrl, {
        method: 'GET',
      })
      const response = await rawResponse.json()

      if (response.success) {
        resolve(response)
      } else {
        reject(new Error(`Request did not complete successfully.`))
      }
    } catch (err) {
      reject(err)
    }
  })
}

export default class NodeApi {
  async getActiveDelegates() {
    return makeApiRequest('delegates', 0, 201)
  }

  async getBlocks(offset = 0, limit = 100) {
    return makeApiRequest('blocks', { limit, offset })
  }

  async getRewardBlocks(generatorPublicKey) {
    return makeApiRequest('blocks', { generatorPublicKey })
  }

  async getTransactions(address) {
    return makeApiRequest('transactions', {
      senderId: address,
      recipientId: address,
    })
  }

  async getVoters(publicKey) {
    return makeApiRequest('delegates/voters', { publicKey })
  }
}
