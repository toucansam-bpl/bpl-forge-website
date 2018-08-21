import { action, observable, runInAction } from 'mobx'
import { task } from 'mobx-task'
import fetch from 'node-fetch'

const fakeGetter = async () =>
  new Promise(async (resolve, reject) => {
    try {
      const roundResponse = await fetch('https://api.bplforge.com/api/rounds')
      const roundResult = await roundResponse.json()
      console.log(roundResult)
      resolve(roundResult.activeDelegates)
    } catch (ex) {
      reject(ex)
    }
  })

export default () => {
  const store = observable({
    todos: [],
    fetchTodos: task(async () => {
      const todos = await fakeGetter()
      runInAction(() => store.todos.replace(todos))
    })
  })
  return store
}
