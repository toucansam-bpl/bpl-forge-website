import { getUrl, makeApiRequest } from './makeApiRequest'


export default class NodeApi {
  apiServer = 'https://explorer.dated.fun/node'

  async getActiveDelegates() {
    return makeApiRequest(this.getUrl('delegates'), 0, 201)
  }

  async getBlocks(offset = 0, limit = 100) {
    return new Promise(async (resolve, reject) => {
      try {
        const blockResponse = await makeApiRequest(this.getUrl('blocks'), { limit, offset })
        resolve(blockResponse.blocks)
      } catch(ex) {
        reject(ex)
      }
    })
  }

  async getCurrentRound() {
    return makeApiRequest(this.getUrl('rounds'))
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
