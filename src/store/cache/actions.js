import NodeCache from 'node-cache'

const INSTANCE = new NodeCache()

INSTANCE.on('error', e => {
  console.log('CACHE: ERROR')
  console.log(e)
})

export const SET = async (ctx, data) => {
  return await new Promise(resolve => {
    INSTANCE.set(data.key, data.value, (e, state) => {
      if (e) {
        return resolve(false)
      }
      return resolve(state)
    })
  })
}

export const GET = async (ctx, key) => {
  return await new Promise(resolve => {
    INSTANCE.get(key, (err, value) => {
      if (!err) {
        return resolve(null)
      }
      resolve(value)
    })
  })
}
