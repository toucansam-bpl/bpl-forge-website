import { getUrl, makeApiRequest } from './makeApiRequest'
import { getLastBlockHeightOfRound } from '../util/rounds'


export default class NodeApi {
  apiServer = 'https://api.bplforge.com'
  // apiServer = 'https://explorer.dated.fun/node'

  async getActiveDelegates() {
    return makeApiRequest(this.getUrl('delegates'), 0, 201)
  }

  async getBlocks(offset = 0, limit = 100, params) {
    return new Promise(async (resolve, reject) => {
      try {
        const blockResponse = await makeApiRequest(this.getUrl('blocks'), { limit, offset, ... params, })
        resolve(blockResponse.blocks)
      } catch(ex) {
        reject(ex)
      }
    })
  }

  async getCurrentRound() {
    return makeApiRequest(this.getUrl('rounds'))
  }

  async getLastBlockOfRound(round) {
    return new Promise(async (resolve, reject) => {
      try {
        const lastBlockResponse = await this.getBlocks(0, 1, { height: getLastBlockHeightOfRound(round) })
        resolve(lastBlockResponse[0])
      } catch(ex) {
        reject(ex)
      }
    })
  }

  async getRoundForgerData() {
    return makeApiRequest(this.getUrl('delegates/getNextForgers'), { limit: 201, })
  }

  async getRewardBlocks(generatorPublicKey) {
    return makeApiRequest(this.getUrl('blocks'), { generatorPublicKey })
  }

  async getTransactions(address) {
    return makeApiRequest(this.getUrl('transactions'), {
      senderId: address,
      recipientId: address,
    })
  }

  getUrl(path) {
    return getUrl(this.apiServer, path)
  }

  async getVoters(publicKey) {
    return makeApiRequest(this.getUrl('delegates/voters'), { publicKey })
  }

  setApiServer(server) {
    this.apiServer = server
  }
}
