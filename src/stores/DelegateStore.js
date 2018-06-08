import { action, computed, observable } from 'mobx'

export default class DelegateStore {
  constructor(nodeApi) {
    this.nodeApi = nodeApi

    this.init()
  }

  @observable address = ''
  @observable delegates = observable.map()

  @computed
  get activeDelegates() {
    return Array.from(this.delegates.values())
  }

  async init() {
    const activeDelegates = await this.nodeApi.getActiveDelegates()
    const delegates = activeDelegates.delegates.reduce((all, d) => {
      all[d.address] = d
      return all
    }, {})

    this.delegates.replace(delegates)
  }

  @computed
  get hasSelectedDelegate() {
    return this.delegates.has(this.address)
  }

  @computed
  get selectedDelegate() {
    return this.delegates.get(this.address)
  }

  @action
  setSelectedAddress(address) {
    this.address = address
  }
}
