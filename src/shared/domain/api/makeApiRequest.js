import fetch from 'node-fetch'
import qs from 'querystring'


export function getUrl(host, path) {
  return `${host}/api/${path}`
}

export async function makeApiRequest(url, params) {
  return new Promise(async (resolve, reject) => {
    try {
      const query = params ? `?${qs.stringify(params)}` : ''
      const requestUrl = `${url}${query}`

      const rawResponse = await fetch(requestUrl, {
        method: 'GET',
      })
      const response = await rawResponse.json()

      if (!response.hasOwnProperty('success') || response.success) {
        resolve(response)
      } else {
        console.log(response)
        reject(new Error(`Request did not complete successfully.`))
      }
    } catch (err) {
      console.log(`Error from ${url}`)
      reject(err)
    }
  })
}
